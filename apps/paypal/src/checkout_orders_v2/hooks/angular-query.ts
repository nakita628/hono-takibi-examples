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

export function getPostV2CheckoutOrdersMutationKey() {
  return ['v2', '/v2/checkout/orders', 'POST'] as const
}

export function getPostV2CheckoutOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.checkout.orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.checkout.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CheckoutOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.checkout.orders.$post>) {
      return parseResponse(client.v2.checkout.orders.$post(args, options))
    },
  })
}

export function injectPostV2CheckoutOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.checkout.orders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.checkout.orders.$post>,
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
    const mutationDefaults = getPostV2CheckoutOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2CheckoutOrdersIdQueryKey(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/checkout/orders/:id', keyArgs] as const
}

export function getV2CheckoutOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CheckoutOrdersIdQueryKey>
  >({
    queryKey: getV2CheckoutOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.checkout.orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CheckoutOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.checkout.orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CheckoutOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CheckoutOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchV2CheckoutOrdersIdMutationKey() {
  return ['v2', '/v2/checkout/orders/:id', 'PATCH'] as const
}

export function getPatchV2CheckoutOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CheckoutOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$patch']>) {
      return parseResponse(client.v2.checkout.orders[':id'].$patch(args, options))
    },
  })
}

export function injectPatchV2CheckoutOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.checkout.orders)[':id']['$patch']>,
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
    const mutationDefaults = getPatchV2CheckoutOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2CheckoutOrdersIdConfirmPaymentSourceMutationKey() {
  return ['v2', '/v2/checkout/orders/:id/confirm-payment-source', 'POST'] as const
}

export function getPostV2CheckoutOrdersIdConfirmPaymentSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CheckoutOrdersIdConfirmPaymentSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.checkout.orders[':id']['confirm-payment-source'].$post(args, options),
      )
    },
  })
}

export function injectPostV2CheckoutOrdersIdConfirmPaymentSource<
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
                  (typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']
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
    const mutationDefaults = getPostV2CheckoutOrdersIdConfirmPaymentSourceMutationOptions<
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

export function getPostV2CheckoutOrdersIdAuthorizeMutationKey() {
  return ['v2', '/v2/checkout/orders/:id/authorize', 'POST'] as const
}

export function getPostV2CheckoutOrdersIdAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CheckoutOrdersIdAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>,
    ) {
      return parseResponse(client.v2.checkout.orders[':id'].authorize.$post(args, options))
    },
  })
}

export function injectPostV2CheckoutOrdersIdAuthorize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>,
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
    const mutationDefaults = getPostV2CheckoutOrdersIdAuthorizeMutationOptions<
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

export function getPostV2CheckoutOrdersIdCaptureMutationKey() {
  return ['v2', '/v2/checkout/orders/:id/capture', 'POST'] as const
}

export function getPostV2CheckoutOrdersIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CheckoutOrdersIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>,
    ) {
      return parseResponse(client.v2.checkout.orders[':id'].capture.$post(args, options))
    },
  })
}

export function injectPostV2CheckoutOrdersIdCapture<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>,
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
    const mutationDefaults = getPostV2CheckoutOrdersIdCaptureMutationOptions<
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

export function getPostV2CheckoutOrdersIdTrackMutationKey() {
  return ['v2', '/v2/checkout/orders/:id/track', 'POST'] as const
}

export function getPostV2CheckoutOrdersIdTrackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CheckoutOrdersIdTrackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>,
    ) {
      return parseResponse(client.v2.checkout.orders[':id'].track.$post(args, options))
    },
  })
}

export function injectPostV2CheckoutOrdersIdTrack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>,
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
    const mutationDefaults = getPostV2CheckoutOrdersIdTrackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV2CheckoutOrdersIdTrackersTrackerIdMutationKey() {
  return ['v2', '/v2/checkout/orders/:id/trackers/:tracker_id', 'PATCH'] as const
}

export function getPatchV2CheckoutOrdersIdTrackersTrackerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CheckoutOrdersIdTrackersTrackerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.checkout.orders[':id'].trackers[':tracker_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchV2CheckoutOrdersIdTrackersTrackerId<
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
                    (typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']
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
    const mutationDefaults = getPatchV2CheckoutOrdersIdTrackersTrackerIdMutationOptions<
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

export function getPostV2CheckoutOrdersOrderUpdateCallbackMutationKey() {
  return ['v2', '/v2/checkout/orders/order-update-callback', 'POST'] as const
}

export function getPostV2CheckoutOrdersOrderUpdateCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CheckoutOrdersOrderUpdateCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>,
    ) {
      return parseResponse(client.v2.checkout.orders['order-update-callback'].$post(args, options))
    },
  })
}

export function injectPostV2CheckoutOrdersOrderUpdateCallback<
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
                ReturnType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>,
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
    const mutationDefaults = getPostV2CheckoutOrdersOrderUpdateCallbackMutationOptions<
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
