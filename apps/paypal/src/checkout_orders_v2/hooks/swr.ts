import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2CheckoutOrdersKey() {
  return ['v2', '/v2/checkout/orders', 'POST'] as const
}

export function usePostV2CheckoutOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.checkout.orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.checkout.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CheckoutOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.checkout.orders.$post> }) =>
        parseResponse(client.v2.checkout.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CheckoutOrdersIdKey(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/checkout/orders/:id', keyArgs] as const
}

export function useGetV2CheckoutOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>
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
        ? getGetV2CheckoutOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.checkout.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CheckoutOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>
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
        ? getGetV2CheckoutOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.checkout.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2CheckoutOrdersIdKey() {
  return ['v2', '/v2/checkout/orders/:id', 'PATCH'] as const
}

export function usePatchV2CheckoutOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CheckoutOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$patch']> },
      ) => parseResponse(client.v2.checkout.orders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CheckoutOrdersIdConfirmPaymentSourceKey() {
  return ['v2', '/v2/checkout/orders/:id/confirm-payment-source', 'POST'] as const
}

export function usePostV2CheckoutOrdersIdConfirmPaymentSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CheckoutOrdersIdConfirmPaymentSourceKey()
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
            (typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.checkout.orders[':id']['confirm-payment-source'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2CheckoutOrdersIdAuthorizeKey() {
  return ['v2', '/v2/checkout/orders/:id/authorize', 'POST'] as const
}

export function usePostV2CheckoutOrdersIdAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CheckoutOrdersIdAuthorizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>
        },
      ) => parseResponse(client.v2.checkout.orders[':id'].authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CheckoutOrdersIdCaptureKey() {
  return ['v2', '/v2/checkout/orders/:id/capture', 'POST'] as const
}

export function usePostV2CheckoutOrdersIdCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CheckoutOrdersIdCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']> },
      ) => parseResponse(client.v2.checkout.orders[':id'].capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2CheckoutOrdersIdTrackKey() {
  return ['v2', '/v2/checkout/orders/:id/track', 'POST'] as const
}

export function usePostV2CheckoutOrdersIdTrack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CheckoutOrdersIdTrackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.checkout.orders)[':id']['track']['$post']> },
      ) => parseResponse(client.v2.checkout.orders[':id'].track.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2CheckoutOrdersIdTrackersTrackerIdKey() {
  return ['v2', '/v2/checkout/orders/:id/trackers/:tracker_id', 'PATCH'] as const
}

export function usePatchV2CheckoutOrdersIdTrackersTrackerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CheckoutOrdersIdTrackersTrackerIdKey()
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
            (typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.checkout.orders[':id'].trackers[':tracker_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2CheckoutOrdersOrderUpdateCallbackKey() {
  return ['v2', '/v2/checkout/orders/order-update-callback', 'POST'] as const
}

export function usePostV2CheckoutOrdersOrderUpdateCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CheckoutOrdersOrderUpdateCallbackKey()
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
            (typeof client.v2.checkout.orders)['order-update-callback']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.checkout.orders['order-update-callback'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
