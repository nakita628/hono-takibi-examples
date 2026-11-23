import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAcceptanceRequestedKey() {
  return ['acceptance-requested', '/acceptance-requested', 'POST'] as const
}

export function usePostAcceptanceRequested<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['acceptance-requested']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['acceptance-requested']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAcceptanceRequestedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['acceptance-requested']['$post']> },
      ) => parseResponse(client['acceptance-requested'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAttemptedDeliveryQueryResolvedKey() {
  return ['attempted-delivery-query-resolved', '/attempted-delivery-query-resolved', 'PUT'] as const
}

export function usePutAttemptedDeliveryQueryResolved<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attempted-delivery-query-resolved']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attempted-delivery-query-resolved']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAttemptedDeliveryQueryResolvedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['attempted-delivery-query-resolved']['$put']> },
      ) => parseResponse(client['attempted-delivery-query-resolved'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCheckoutTenantCheckoutIdKey(
  args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checkout', '/checkout/:tenant/:checkoutId', keyArgs] as const
}

export function useGetCheckoutTenantCheckoutId<TError = unknown>(
  args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCheckoutTenantCheckoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checkout[':tenant'][':checkoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckoutTenantCheckoutId<TError = unknown>(
  args: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCheckoutTenantCheckoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checkout[':tenant'][':checkoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCheckoutTenantCheckoutIdKey() {
  return ['checkout', '/checkout/:tenant/:checkoutId', 'PATCH'] as const
}

export function usePatchCheckoutTenantCheckoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCheckoutTenantCheckoutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.checkout)[':tenant'][':checkoutId']['$patch']> },
      ) => parseResponse(client.checkout[':tenant'][':checkoutId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCheckoutTenantCheckoutIdFulfilmentAvailabletimesKey(
  args: InferRequestType<
    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['checkout', '/checkout/:tenant/:checkoutId/fulfilment/availabletimes', keyArgs] as const
}

export function useGetCheckoutTenantCheckoutIdFulfilmentAvailabletimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCheckoutTenantCheckoutIdFulfilmentAvailabletimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.checkout[':tenant'][':checkoutId'].fulfilment.availabletimes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckoutTenantCheckoutIdFulfilmentAvailabletimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.checkout)[':tenant'][':checkoutId']['fulfilment']['availabletimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCheckoutTenantCheckoutIdFulfilmentAvailabletimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.checkout[':tenant'][':checkoutId'].fulfilment.availabletimes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConsumersTenantKey(
  args: InferRequestType<(typeof client.consumers)[':tenant']['$get']>,
) {
  return ['consumers', '/consumers/:tenant', args] as const
}

export function useGetConsumersTenant<TError = unknown>(
  args: InferRequestType<(typeof client.consumers)[':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumers[':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersTenant<TError = unknown>(
  args: InferRequestType<(typeof client.consumers)[':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.consumers[':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConsumersTenantKey() {
  return ['consumers', '/consumers/:tenant', 'POST'] as const
}

export function usePostConsumersTenant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':tenant']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumers)[':tenant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersTenantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.consumers)[':tenant']['$post']> },
      ) => parseResponse(client.consumers[':tenant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumersTenantMeCommunicationPreferencesKey(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
  >,
) {
  return ['consumers', '/consumers/:tenant/me/communication-preferences', args] as const
}

export function useGetConsumersTenantMeCommunicationPreferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersTenantMeCommunicationPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':tenant'].me['communication-preferences'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersTenantMeCommunicationPreferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersTenantMeCommunicationPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':tenant'].me['communication-preferences'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConsumersTenantMeCommunicationPreferencesTypeKey(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
  >,
) {
  return ['consumers', '/consumers/:tenant/me/communication-preferences/:type', args] as const
}

export function useGetConsumersTenantMeCommunicationPreferencesType<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersTenantMeCommunicationPreferencesTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':tenant'].me['communication-preferences'][':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersTenantMeCommunicationPreferencesType<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersTenantMeCommunicationPreferencesTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':tenant'].me['communication-preferences'][':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutConsumersTenantMeCommunicationPreferencesTypeKey() {
  return ['consumers', '/consumers/:tenant/me/communication-preferences/:type', 'PUT'] as const
}

export function usePutConsumersTenantMeCommunicationPreferencesType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConsumersTenantMeCommunicationPreferencesTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['$put']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':tenant'].me['communication-preferences'][':type'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelKey() {
  return [
    'consumers',
    '/consumers/:tenant/me/communication-preferences/:type/subscribedChannels/:channel',
    'POST',
  ] as const
}

export function usePostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':tenant'].me['communication-preferences'][':type'].subscribedChannels[
            ':channel'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelKey() {
  return [
    'consumers',
    '/consumers/:tenant/me/communication-preferences/:type/subscribedChannels/:channel',
    'DELETE',
  ] as const
}

export function useDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':tenant']['me']['communication-preferences'][':type']['subscribedChannels'][':channel']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':tenant'].me['communication-preferences'][':type'].subscribedChannels[
            ':channel'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDeliveryFailedKey() {
  return ['delivery-failed', '/delivery-failed', 'PUT'] as const
}

export function usePutDeliveryFailed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['delivery-failed']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['delivery-failed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliveryFailedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['delivery-failed']['$put']> },
      ) => parseResponse(client['delivery-failed'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeliveryFeesTenantKey(
  args: InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>,
) {
  return ['delivery-fees', '/delivery-fees/:tenant', args] as const
}

export function useGetDeliveryFeesTenant<TError = unknown>(
  args: InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryFeesTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['delivery-fees'][':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveryFeesTenant<TError = unknown>(
  args: InferRequestType<(typeof client)['delivery-fees'][':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryFeesTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['delivery-fees'][':tenant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['delivery-fees'][':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeliveryEstimateKey(
  args: InferRequestType<typeof client.delivery.estimate.$get>,
) {
  return ['delivery', '/delivery/estimate', args] as const
}

export function useGetDeliveryEstimate<TError = unknown>(
  args: InferRequestType<typeof client.delivery.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveryEstimate<TError = unknown>(
  args: InferRequestType<typeof client.delivery.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.estimate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeliveryPoolsKey() {
  return ['delivery', '/delivery/pools'] as const
}

export function useGetDeliveryPools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliveryPoolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery.pools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveryPools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliveryPoolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery.pools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeliveryPoolsKey() {
  return ['delivery', '/delivery/pools', 'POST'] as const
}

export function usePostDeliveryPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery.pools.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.delivery.pools.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeliveryPoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.delivery.pools.$post> }) =>
        parseResponse(client.delivery.pools.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeliveryPoolsDeliveryPoolIdKey(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>,
) {
  return ['delivery', '/delivery/pools/:deliveryPoolId', args] as const
}

export function useGetDeliveryPoolsDeliveryPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryPoolsDeliveryPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery.pools[':deliveryPoolId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveryPoolsDeliveryPoolId<TError = unknown>(
  args: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryPoolsDeliveryPoolIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery.pools[':deliveryPoolId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDeliveryPoolsDeliveryPoolIdKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId', 'PUT'] as const
}

export function usePutDeliveryPoolsDeliveryPoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliveryPoolsDeliveryPoolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$put']> },
      ) => parseResponse(client.delivery.pools[':deliveryPoolId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeliveryPoolsDeliveryPoolIdKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId', 'DELETE'] as const
}

export function useDeleteDeliveryPoolsDeliveryPoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeliveryPoolsDeliveryPoolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$delete']> },
      ) => parseResponse(client.delivery.pools[':deliveryPoolId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDeliveryPoolsDeliveryPoolIdKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId', 'PATCH'] as const
}

export function usePatchDeliveryPoolsDeliveryPoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDeliveryPoolsDeliveryPoolIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['$patch']> },
      ) => parseResponse(client.delivery.pools[':deliveryPoolId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeliveryPoolsDeliveryPoolIdAvailabilityRelativeKey(
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
  >,
) {
  return ['delivery', '/delivery/pools/:deliveryPoolId/availability/relative', args] as const
}

export function useGetDeliveryPoolsDeliveryPoolIdAvailabilityRelative<TError = unknown>(
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryPoolsDeliveryPoolIdAvailabilityRelativeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.delivery.pools[':deliveryPoolId'].availability.relative.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliveryPoolsDeliveryPoolIdAvailabilityRelative<TError = unknown>(
  args: InferRequestType<
    (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliveryPoolsDeliveryPoolIdAvailabilityRelativeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.delivery.pools[':deliveryPoolId'].availability.relative.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDeliveryPoolsDeliveryPoolIdAvailabilityRelativeKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/availability/relative', 'PUT'] as const
}

export function usePutDeliveryPoolsDeliveryPoolIdAvailabilityRelative<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliveryPoolsDeliveryPoolIdAvailabilityRelativeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.delivery.pools)[':deliveryPoolId']['availability']['relative']['$put']
          >
        },
      ) =>
        parseResponse(
          client.delivery.pools[':deliveryPoolId'].availability.relative.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDeliveryPoolsDeliveryPoolIdHoursKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/hours', 'PUT'] as const
}

export function usePutDeliveryPoolsDeliveryPoolIdHours<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliveryPoolsDeliveryPoolIdHoursKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['hours']['$put']>
        },
      ) => parseResponse(client.delivery.pools[':deliveryPoolId'].hours.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeliveryPoolsDeliveryPoolIdRestaurantsKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/restaurants', 'PUT'] as const
}

export function usePutDeliveryPoolsDeliveryPoolIdRestaurants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliveryPoolsDeliveryPoolIdRestaurantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$put']
          >
        },
      ) =>
        parseResponse(
          client.delivery.pools[':deliveryPoolId'].restaurants.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeliveryPoolsDeliveryPoolIdRestaurantsKey() {
  return ['delivery', '/delivery/pools/:deliveryPoolId/restaurants', 'DELETE'] as const
}

export function useDeleteDeliveryPoolsDeliveryPoolIdRestaurants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeliveryPoolsDeliveryPoolIdRestaurantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.delivery.pools)[':deliveryPoolId']['restaurants']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.delivery.pools[':deliveryPoolId'].restaurants.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutDriverAssignedToDeliveryKey() {
  return ['driver-assigned-to-delivery', '/driver-assigned-to-delivery', 'PUT'] as const
}

export function usePutDriverAssignedToDelivery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-assigned-to-delivery']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['driver-assigned-to-delivery']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDriverAssignedToDeliveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['driver-assigned-to-delivery']['$put']> },
      ) => parseResponse(client['driver-assigned-to-delivery'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDriverAtDeliveryAddressKey() {
  return ['driver-at-delivery-address', '/driver-at-delivery-address', 'PUT'] as const
}

export function usePutDriverAtDeliveryAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-at-delivery-address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['driver-at-delivery-address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDriverAtDeliveryAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['driver-at-delivery-address']['$put']> },
      ) => parseResponse(client['driver-at-delivery-address'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDriverAtRestaurantKey() {
  return ['driver-at-restaurant', '/driver-at-restaurant', 'PUT'] as const
}

export function usePutDriverAtRestaurant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['driver-at-restaurant']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['driver-at-restaurant']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDriverAtRestaurantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['driver-at-restaurant']['$put']> },
      ) => parseResponse(client['driver-at-restaurant'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDriverHasDeliveredOrderKey() {
  return ['driver-has-delivered-order', '/driver-has-delivered-order', 'PUT'] as const
}

export function usePutDriverHasDeliveredOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-has-delivered-order']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['driver-has-delivered-order']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDriverHasDeliveredOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['driver-has-delivered-order']['$put']> },
      ) => parseResponse(client['driver-has-delivered-order'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDriverLocationKey() {
  return ['driver-location', '/driver-location', 'PUT'] as const
}

export function usePutDriverLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['driver-location']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['driver-location']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDriverLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['driver-location']['$put']> },
      ) => parseResponse(client['driver-location'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDriverOnTheirWayToDeliveryAddressKey() {
  return [
    'driver-on-their-way-to-delivery-address',
    '/driver-on-their-way-to-delivery-address',
    'PUT',
  ] as const
}

export function usePutDriverOnTheirWayToDeliveryAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDriverOnTheirWayToDeliveryAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['driver-on-their-way-to-delivery-address']['$put']>
        },
      ) =>
        parseResponse(client['driver-on-their-way-to-delivery-address'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLateOrderCompensationQueryKey() {
  return ['late-order-compensation-query', '/late-order-compensation-query', 'POST'] as const
}

export function usePostLateOrderCompensationQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['late-order-compensation-query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['late-order-compensation-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLateOrderCompensationQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['late-order-compensation-query']['$post']> },
      ) => parseResponse(client['late-order-compensation-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLateOrderQueryKey() {
  return ['late-order-query', '/late-order-query', 'POST'] as const
}

export function usePostLateOrderQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['late-order-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['late-order-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLateOrderQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['late-order-query']['$post']> },
      ) => parseResponse(client['late-order-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMenuIngestionCompleteKey() {
  return ['menu-ingestion-complete', '/menu-ingestion-complete', 'POST'] as const
}

export function usePostMenuIngestionComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['menu-ingestion-complete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['menu-ingestion-complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMenuIngestionCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['menu-ingestion-complete']['$post']> },
      ) => parseResponse(client['menu-ingestion-complete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderAcceptedKey() {
  return ['order-accepted', '/order-accepted', 'POST'] as const
}

export function usePostOrderAccepted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-accepted']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-accepted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderAcceptedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order-accepted']['$post']> },
      ) => parseResponse(client['order-accepted'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderCancelledKey() {
  return ['order-cancelled', '/order-cancelled', 'POST'] as const
}

export function usePostOrderCancelled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-cancelled']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-cancelled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderCancelledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order-cancelled']['$post']> },
      ) => parseResponse(client['order-cancelled'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderEligibleForRestaurantCompensationKey() {
  return [
    'order-eligible-for-restaurant-compensation',
    '/order-eligible-for-restaurant-compensation',
    'POST',
  ] as const
}

export function usePostOrderEligibleForRestaurantCompensation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['order-eligible-for-restaurant-compensation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderEligibleForRestaurantCompensationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['order-eligible-for-restaurant-compensation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['order-eligible-for-restaurant-compensation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrderIsReadyForPickupKey() {
  return ['order-is-ready-for-pickup', '/order-is-ready-for-pickup', 'PUT'] as const
}

export function usePutOrderIsReadyForPickup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-is-ready-for-pickup']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-is-ready-for-pickup']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrderIsReadyForPickupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order-is-ready-for-pickup']['$put']> },
      ) => parseResponse(client['order-is-ready-for-pickup'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderReadyForPreparationAsyncKey() {
  return [
    'order-ready-for-preparation-async',
    '/order-ready-for-preparation-async',
    'POST',
  ] as const
}

export function usePostOrderReadyForPreparationAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-ready-for-preparation-async']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-ready-for-preparation-async']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderReadyForPreparationAsyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['order-ready-for-preparation-async']['$post']> },
      ) => parseResponse(client['order-ready-for-preparation-async'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderReadyForPreparationSyncKey() {
  return ['order-ready-for-preparation-sync', '/order-ready-for-preparation-sync', 'POST'] as const
}

export function usePostOrderReadyForPreparationSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-ready-for-preparation-sync']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-ready-for-preparation-sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderReadyForPreparationSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['order-ready-for-preparation-sync']['$post']> },
      ) => parseResponse(client['order-ready-for-preparation-sync'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderRejectedKey() {
  return ['order-rejected', '/order-rejected', 'POST'] as const
}

export function usePostOrderRejected<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-rejected']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-rejected']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderRejectedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order-rejected']['$post']> },
      ) => parseResponse(client['order-rejected'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrderRequiresDeliveryAcceptanceKey() {
  return [
    'order-requires-delivery-acceptance',
    '/order-requires-delivery-acceptance',
    'PUT',
  ] as const
}

export function usePutOrderRequiresDeliveryAcceptance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['order-requires-delivery-acceptance']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-requires-delivery-acceptance']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrderRequiresDeliveryAcceptanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['order-requires-delivery-acceptance']['$put']> },
      ) => parseResponse(client['order-requires-delivery-acceptance'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrderTimeUpdatedKey() {
  return ['order-time-updated', '/order-time-updated', 'POST'] as const
}

export function usePostOrderTimeUpdated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['order-time-updated']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['order-time-updated']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderTimeUpdatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['order-time-updated']['$post']> },
      ) => parseResponse(client['order-time-updated'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersKey() {
  return ['orders', '/orders', 'POST'] as const
}

export function usePostOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.$post> }) =>
        parseResponse(client.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersDeliverystateDriverlocationKey() {
  return ['orders', '/orders/deliverystate/driverlocation', 'PUT'] as const
}

export function usePutOrdersDeliverystateDriverlocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.orders.deliverystate.driverlocation.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.deliverystate.driverlocation.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersDeliverystateDriverlocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.orders.deliverystate.driverlocation.$put> },
      ) => parseResponse(client.orders.deliverystate.driverlocation.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdAcceptKey() {
  return ['orders', '/orders/:orderId/accept', 'PUT'] as const
}

export function usePutOrdersOrderIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['accept']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['accept']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':orderId']['accept']['$put']> },
      ) => parseResponse(client.orders[':orderId'].accept.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdCancelKey() {
  return ['orders', '/orders/:orderId/cancel', 'PUT'] as const
}

export function usePutOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':orderId']['cancel']['$put']> },
      ) => parseResponse(client.orders[':orderId'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdCompleteKey() {
  return ['orders', '/orders/:orderId/complete', 'POST'] as const
}

export function usePostOrdersOrderIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':orderId']['complete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':orderId']['complete']['$post']> },
      ) => parseResponse(client.orders[':orderId'].complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateAtdeliveryaddressKey() {
  return ['orders', '/orders/:orderId/deliverystate/atdeliveryaddress', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateAtdeliveryaddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateAtdeliveryaddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['atdeliveryaddress']['$put']
          >
        },
      ) =>
        parseResponse(
          client.orders[':orderId'].deliverystate.atdeliveryaddress.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateAtrestaurantKey() {
  return ['orders', '/orders/:orderId/deliverystate/atrestaurant', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateAtrestaurant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateAtrestaurantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['atrestaurant']['$put']
          >
        },
      ) =>
        parseResponse(
          client.orders[':orderId'].deliverystate.atrestaurant.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateAtrestaurantetaKey() {
  return ['orders', '/orders/:orderId/deliverystate/atrestauranteta', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateAtrestauranteta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateAtrestaurantetaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['atrestauranteta']['$put']
          >
        },
      ) =>
        parseResponse(
          client.orders[':orderId'].deliverystate.atrestauranteta.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateDeliveredKey() {
  return ['orders', '/orders/:orderId/deliverystate/delivered', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateDelivered<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateDeliveredKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['delivered']['$put']
          >
        },
      ) =>
        parseResponse(client.orders[':orderId'].deliverystate.delivered.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateDriverassignedKey() {
  return ['orders', '/orders/:orderId/deliverystate/driverassigned', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateDriverassigned<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateDriverassignedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['driverassigned']['$put']
          >
        },
      ) =>
        parseResponse(
          client.orders[':orderId'].deliverystate.driverassigned.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateDriverlocationKey() {
  return ['orders', '/orders/:orderId/deliverystate/driverlocation', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateDriverlocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateDriverlocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['driverlocation']['$put']
          >
        },
      ) =>
        parseResponse(
          client.orders[':orderId'].deliverystate.driverlocation.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateDriverunassignedKey() {
  return ['orders', '/orders/:orderId/deliverystate/driverunassigned', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateDriverunassigned<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateDriverunassignedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['driverunassigned']['$put']
          >
        },
      ) =>
        parseResponse(
          client.orders[':orderId'].deliverystate.driverunassigned.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDeliverystateOnitswayKey() {
  return ['orders', '/orders/:orderId/deliverystate/onitsway', 'PUT'] as const
}

export function usePutOrdersOrderIdDeliverystateOnitsway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDeliverystateOnitswayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':orderId']['deliverystate']['onitsway']['$put']
          >
        },
      ) => parseResponse(client.orders[':orderId'].deliverystate.onitsway.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdDuedateKey() {
  return ['orders', '/orders/:orderId/duedate', 'PUT'] as const
}

export function usePutOrdersOrderIdDuedate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['duedate']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['duedate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdDuedateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':orderId']['duedate']['$put']> },
      ) => parseResponse(client.orders[':orderId'].duedate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdIgnoreKey() {
  return ['orders', '/orders/:orderId/ignore', 'PUT'] as const
}

export function usePutOrdersOrderIdIgnore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['ignore']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['ignore']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdIgnoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':orderId']['ignore']['$put']> },
      ) => parseResponse(client.orders[':orderId'].ignore.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersOrderIdReadyforcollectionKey() {
  return ['orders', '/orders/:orderId/readyforcollection', 'POST'] as const
}

export function usePostOrdersOrderIdReadyforcollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdReadyforcollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orders)[':orderId']['readyforcollection']['$post']>
        },
      ) => parseResponse(client.orders[':orderId'].readyforcollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrdersOrderIdRejectKey() {
  return ['orders', '/orders/:orderId/reject', 'PUT'] as const
}

export function usePutOrdersOrderIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':orderId']['reject']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':orderId']['reject']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrdersOrderIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':orderId']['reject']['$put']> },
      ) => parseResponse(client.orders[':orderId'].reject.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseKey() {
  return [
    'orders',
    '/orders/:tenant/:orderId/consumerqueries/lateorder/restaurantresponse',
    'POST',
  ] as const
}

export function usePostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponse<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrdersTenantOrderIdConsumerqueriesLateorderRestaurantresponseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateorder']['restaurantresponse']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders[':tenant'][':orderId'].consumerqueries.lateorder.restaurantresponse.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseKey() {
  return [
    'orders',
    '/orders/:tenant/:orderId/consumerqueries/lateordercompensation/restaurantresponse',
    'POST',
  ] as const
}

export function usePostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponse<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrdersTenantOrderIdConsumerqueriesLateordercompensationRestaurantresponseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':tenant'][':orderId']['consumerqueries']['lateordercompensation']['restaurantresponse']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders[':tenant'][
            ':orderId'
          ].consumerqueries.lateordercompensation.restaurantresponse.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersTenantOrderIdRestaurantqueriesCompensationKey() {
  return ['orders', '/orders/:tenant/:orderId/restaurantqueries/compensation', 'POST'] as const
}

export function usePostOrdersTenantOrderIdRestaurantqueriesCompensation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersTenantOrderIdRestaurantqueriesCompensationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.orders)[':tenant'][':orderId']['restaurantqueries']['compensation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.orders[':tenant'][':orderId'].restaurantqueries.compensation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRedeliveryRequestedKey() {
  return ['redelivery-requested', '/redelivery-requested', 'PUT'] as const
}

export function usePutRedeliveryRequested<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redelivery-requested']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['redelivery-requested']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRedeliveryRequestedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['redelivery-requested']['$put']> },
      ) => parseResponse(client['redelivery-requested'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestaurantOfflineStatusKey() {
  return ['restaurant-offline-status', '/restaurant-offline-status', 'PUT'] as const
}

export function usePutRestaurantOfflineStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['restaurant-offline-status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['restaurant-offline-status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestaurantOfflineStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['restaurant-offline-status']['$put']> },
      ) => parseResponse(client['restaurant-offline-status'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestaurantOnlineStatusKey() {
  return ['restaurant-online-status', '/restaurant-online-status', 'PUT'] as const
}

export function usePutRestaurantOnlineStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['restaurant-online-status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['restaurant-online-status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestaurantOnlineStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['restaurant-online-status']['$put']> },
      ) => parseResponse(client['restaurant-online-status'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestaurantsBylatlongKey(
  args: InferRequestType<typeof client.restaurants.bylatlong.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/bylatlong', keyArgs] as const
}

export function useGetRestaurantsBylatlong<TError = unknown>(
  args: InferRequestType<typeof client.restaurants.bylatlong.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsBylatlongKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restaurants.bylatlong.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsBylatlong<TError = unknown>(
  args: InferRequestType<typeof client.restaurants.bylatlong.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsBylatlongKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.bylatlong.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.restaurants.bylatlong.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsBypostcodePostcodeKey(
  args: InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/bypostcode/:postcode', keyArgs] as const
}

export function useGetRestaurantsBypostcodePostcode<TError = unknown>(
  args: InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsBypostcodePostcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restaurants.bypostcode[':postcode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsBypostcodePostcode<TError = unknown>(
  args: InferRequestType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsBypostcodePostcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restaurants.bypostcode)[':postcode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.restaurants.bypostcode[':postcode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestaurantsDriverEtaKey() {
  return ['restaurants', '/restaurants/driver/eta', 'PUT'] as const
}

export function usePutRestaurantsDriverEta<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.restaurants.driver.eta.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.restaurants.driver.eta.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestaurantsDriverEtaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.restaurants.driver.eta.$put> },
      ) => parseResponse(client.restaurants.driver.eta.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/catalogue', args] as const
}

export function useGetRestaurantsTenantRestaurantIdCatalogue<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogue<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueAvailabilitiesKey(
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

export function useGetRestaurantsTenantRestaurantIdCatalogueAvailabilities<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueAvailabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.availabilities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueAvailabilities<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['availabilities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueAvailabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.availabilities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueCategoriesKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/catalogue/categories', args] as const
}

export function useGetRestaurantsTenantRestaurantIdCatalogueCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.categories.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueCategories<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.categories.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsKey(
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

export function useGetRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItems<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.categories[
            ':categoryId'
          ].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItems<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['categories'][':categoryId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.categories[
            ':categoryId'
          ].items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueItemsKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/catalogue/items', args] as const
}

export function useGetRestaurantsTenantRestaurantIdCatalogueItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsKey(
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

export function useGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroups<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsKey(
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

export function useGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups[
            ':dealGroupId'
          ].dealitemvariations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['dealgroups'][':dealGroupId']['dealitemvariations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].dealgroups[
            ':dealGroupId'
          ].dealitemvariations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsKey(
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

export function useGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroups<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[
            ':itemId'
          ].modifiergroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroups<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['modifiergroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[
            ':itemId'
          ].modifiergroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsKey(
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

export function useGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariations<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].variations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['catalogue']['items'][':itemId']['variations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].catalogue.items[':itemId'].variations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCustomerclaimsKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/customerclaims', keyArgs] as const
}

export function useGetRestaurantsTenantRestaurantIdCustomerclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCustomerclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCustomerclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCustomerclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdCustomerclaimsIdKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/customerclaims/:id', keyArgs] as const
}

export function useGetRestaurantsTenantRestaurantIdCustomerclaimsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCustomerclaimsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdCustomerclaimsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdCustomerclaimsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseKey() {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/customerclaims/:id/restaurantresponse',
    'POST',
  ] as const
}

export function usePostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponse<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['$post']
          >
        },
      ) =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims[
            ':id'
          ].restaurantresponse.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationKey() {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/customerclaims/:id/restaurantresponse/justification',
    'PUT',
  ] as const
}

export function usePutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['customerclaims'][':id']['restaurantresponse']['justification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].customerclaims[
            ':id'
          ].restaurantresponse.justification.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdFeesKey(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/fees', keyArgs] as const
}

export function useGetRestaurantsTenantRestaurantIdFees<TError = unknown>(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdFeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].fees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdFees<TError = unknown>(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdFeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].fees.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestaurantsTenantRestaurantIdFeesKey() {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/fees', 'PUT'] as const
}

export function usePutRestaurantsTenantRestaurantIdFees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestaurantsTenantRestaurantIdFeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['fees']['$put']
          >
        },
      ) =>
        parseResponse(client.restaurants[':tenant'][':restaurantId'].fees.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdMenuKey(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/menu', keyArgs] as const
}

export function useGetRestaurantsTenantRestaurantIdMenu<TError = unknown>(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdMenuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].menu.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdMenu<TError = unknown>(
  args: InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdMenuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].menu.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestaurantsTenantRestaurantIdMenuKey() {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/menu', 'PUT'] as const
}

export function usePutRestaurantsTenantRestaurantIdMenu<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestaurantsTenantRestaurantIdMenuKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['menu']['$put']
          >
        },
      ) =>
        parseResponse(client.restaurants[':tenant'][':restaurantId'].menu.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdOrdertimesKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['restaurants', '/restaurants/:tenant/:restaurantId/ordertimes', keyArgs] as const
}

export function useGetRestaurantsTenantRestaurantIdOrdertimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdOrdertimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].ordertimes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdOrdertimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdOrdertimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].ordertimes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeKey() {
  return [
    'restaurants',
    '/restaurants/:tenant/:restaurantId/ordertimes/:dayOfWeek/:serviceType',
    'PUT',
  ] as const
}

export function usePutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['ordertimes'][':dayOfWeek'][':serviceType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].ordertimes[':dayOfWeek'][
            ':serviceType'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestaurantsTenantRestaurantIdServicetimesKey(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
  >,
) {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/servicetimes', args] as const
}

export function useGetRestaurantsTenantRestaurantIdServicetimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdServicetimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].servicetimes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestaurantsTenantRestaurantIdServicetimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRestaurantsTenantRestaurantIdServicetimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].servicetimes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestaurantsTenantRestaurantIdServicetimesKey() {
  return ['restaurants', '/restaurants/:tenant/:restaurantId/servicetimes', 'PUT'] as const
}

export function usePutRestaurantsTenantRestaurantIdServicetimes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestaurantsTenantRestaurantIdServicetimesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.restaurants)[':tenant'][':restaurantId']['servicetimes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.restaurants[':tenant'][':restaurantId'].servicetimes.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSearchAutocompleteTenantKey(
  args: InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>,
) {
  return ['search', '/search/autocomplete/:tenant', args] as const
}

export function useGetSearchAutocompleteTenant<TError = unknown>(
  args: InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchAutocompleteTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.autocomplete[':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchAutocompleteTenant<TError = unknown>(
  args: InferRequestType<(typeof client.search.autocomplete)[':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchAutocompleteTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.autocomplete)[':tenant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.autocomplete[':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchRestaurantsTenantKey(
  args: InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>,
) {
  return ['search', '/search/restaurants/:tenant', args] as const
}

export function useGetSearchRestaurantsTenant<TError = unknown>(
  args: InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchRestaurantsTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.restaurants[':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchRestaurantsTenant<TError = unknown>(
  args: InferRequestType<(typeof client.search.restaurants)[':tenant']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchRestaurantsTenantKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search.restaurants)[':tenant']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.restaurants[':tenant'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSendToPosFailedKey() {
  return ['send-to-pos-failed', '/send-to-pos-failed', 'POST'] as const
}

export function usePostSendToPosFailed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['send-to-pos-failed']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['send-to-pos-failed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendToPosFailedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['send-to-pos-failed']['$post']> },
      ) => parseResponse(client['send-to-pos-failed'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TenantRestaurantsEventOfflineKey() {
  return ['v1', '/v1/:tenant/restaurants/event/offline', 'POST'] as const
}

export function usePostV1TenantRestaurantsEventOffline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TenantRestaurantsEventOfflineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)[':tenant']['restaurants']['event']['offline']['$post']
          >
        },
      ) => parseResponse(client.v1[':tenant'].restaurants.event.offline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TenantRestaurantsIdEventOfflineKey() {
  return ['v1', '/v1/:tenant/restaurants/:id/event/offline', 'DELETE'] as const
}

export function useDeleteV1TenantRestaurantsIdEventOffline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TenantRestaurantsIdEventOfflineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)[':tenant']['restaurants'][':id']['event']['offline']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1[':tenant'].restaurants[':id'].event.offline.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTenantOrdersOrderIdQueriesAttempteddeliveryKey() {
  return [':tenant', '/:tenant/orders/:orderId/queries/attempteddelivery', 'POST'] as const
}

export function usePostTenantOrdersOrderIdQueriesAttempteddelivery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTenantOrdersOrderIdQueriesAttempteddeliveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenant'].orders[':orderId'].queries.attempteddelivery.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderKey() {
  return [
    ':tenant',
    '/:tenant/orders/:orderId/queries/attempteddelivery/resolution/redeliverorder',
    'POST',
  ] as const
}

export function usePostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostTenantOrdersOrderIdQueriesAttempteddeliveryResolutionRedeliverorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':tenant']['orders'][':orderId']['queries']['attempteddelivery']['resolution']['redeliverorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':tenant'].orders[
            ':orderId'
          ].queries.attempteddelivery.resolution.redeliverorder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
