import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAirtravelCoordinatesKey() {
  return ['airtravelCoordinates'] as const
}

export function getAirtravelMultilegKey() {
  return ['airtravelMultileg'] as const
}

export function getEcommerceDeliveryKey() {
  return ['ecommerceDelivery'] as const
}

export function getRequestApiKeyKey() {
  return ['requestApiKey'] as const
}

export function getRoadDistanceKey() {
  return ['roadDistance'] as const
}

export function getUrbanDeliveryKey() {
  return ['urbanDelivery'] as const
}

export function getPostAirtravelCoordinatesKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates', 'POST'] as const
}

export function usePostAirtravelCoordinates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.airtravelCoordinates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelCoordinates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAirtravelCoordinatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.airtravelCoordinates.$post> },
      ) => parseResponse(client.airtravelCoordinates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelCoordinatesConfirmCarbonOffsetKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmCarbonOffset', 'PATCH'] as const
}

export function usePatchAirtravelCoordinatesConfirmCarbonOffset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelCoordinatesConfirmCarbonOffsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch> },
      ) =>
        parseResponse(client.airtravelCoordinates.confirmCarbonOffset.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelCoordinatesConfirmPaymentKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmPayment', 'PATCH'] as const
}

export function usePatchAirtravelCoordinatesConfirmPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmPayment.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelCoordinates.confirmPayment.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelCoordinatesConfirmPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.airtravelCoordinates.confirmPayment.$patch> },
      ) => parseResponse(client.airtravelCoordinates.confirmPayment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelCoordinatesConfirmPlantingKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmPlanting', 'PATCH'] as const
}

export function usePatchAirtravelCoordinatesConfirmPlanting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelCoordinates.confirmPlanting.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelCoordinatesConfirmPlantingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.airtravelCoordinates.confirmPlanting.$patch> },
      ) => parseResponse(client.airtravelCoordinates.confirmPlanting.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelCoordinatesConfirmTransactionKey() {
  return ['airtravelCoordinates', '/airtravelCoordinates/confirmTransaction', 'PATCH'] as const
}

export function usePatchAirtravelCoordinatesConfirmTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelCoordinates.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelCoordinates.confirmTransaction.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelCoordinatesConfirmTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.airtravelCoordinates.confirmTransaction.$patch> },
      ) => parseResponse(client.airtravelCoordinates.confirmTransaction.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAirtravelMultilegKey() {
  return ['airtravelMultileg', '/airtravelMultileg', 'POST'] as const
}

export function usePostAirtravelMultileg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.airtravelMultileg.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelMultileg.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAirtravelMultilegKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.airtravelMultileg.$post> }) =>
        parseResponse(client.airtravelMultileg.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelMultilegConfirmCarbonOffsetKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmCarbonOffset', 'PATCH'] as const
}

export function usePatchAirtravelMultilegConfirmCarbonOffset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelMultilegConfirmCarbonOffsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch> },
      ) => parseResponse(client.airtravelMultileg.confirmCarbonOffset.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelMultilegConfirmPaymentKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmPayment', 'PATCH'] as const
}

export function usePatchAirtravelMultilegConfirmPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmPayment.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelMultileg.confirmPayment.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelMultilegConfirmPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.airtravelMultileg.confirmPayment.$patch> },
      ) => parseResponse(client.airtravelMultileg.confirmPayment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelMultilegConfirmPlantingKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmPlanting', 'PATCH'] as const
}

export function usePatchAirtravelMultilegConfirmPlanting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelMultileg.confirmPlanting.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelMultilegConfirmPlantingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.airtravelMultileg.confirmPlanting.$patch> },
      ) => parseResponse(client.airtravelMultileg.confirmPlanting.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAirtravelMultilegConfirmTransactionKey() {
  return ['airtravelMultileg', '/airtravelMultileg/confirmTransaction', 'PATCH'] as const
}

export function usePatchAirtravelMultilegConfirmTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.airtravelMultileg.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.airtravelMultileg.confirmTransaction.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAirtravelMultilegConfirmTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.airtravelMultileg.confirmTransaction.$patch> },
      ) => parseResponse(client.airtravelMultileg.confirmTransaction.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEcommerceDeliveryKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery', 'POST'] as const
}

export function usePostEcommerceDelivery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerceDelivery.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ecommerceDelivery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEcommerceDeliveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ecommerceDelivery.$post> }) =>
        parseResponse(client.ecommerceDelivery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEcommerceDeliveryConfirmCarbonOffsetKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmCarbonOffset', 'PATCH'] as const
}

export function usePatchEcommerceDeliveryConfirmCarbonOffset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEcommerceDeliveryConfirmCarbonOffsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch> },
      ) => parseResponse(client.ecommerceDelivery.confirmCarbonOffset.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEcommerceDeliveryConfirmPaymentKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmPayment', 'PATCH'] as const
}

export function usePatchEcommerceDeliveryConfirmPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmPayment.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ecommerceDelivery.confirmPayment.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEcommerceDeliveryConfirmPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ecommerceDelivery.confirmPayment.$patch> },
      ) => parseResponse(client.ecommerceDelivery.confirmPayment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEcommerceDeliveryConfirmPlantingKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmPlanting', 'PATCH'] as const
}

export function usePatchEcommerceDeliveryConfirmPlanting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ecommerceDelivery.confirmPlanting.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEcommerceDeliveryConfirmPlantingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ecommerceDelivery.confirmPlanting.$patch> },
      ) => parseResponse(client.ecommerceDelivery.confirmPlanting.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEcommerceDeliveryConfirmTransactionKey() {
  return ['ecommerceDelivery', '/ecommerceDelivery/confirmTransaction', 'PATCH'] as const
}

export function usePatchEcommerceDeliveryConfirmTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerceDelivery.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ecommerceDelivery.confirmTransaction.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEcommerceDeliveryConfirmTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.ecommerceDelivery.confirmTransaction.$patch> },
      ) => parseResponse(client.ecommerceDelivery.confirmTransaction.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestApiKeyKey() {
  return ['requestApiKey', '/requestApiKey', 'POST'] as const
}

export function usePostRequestApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requestApiKey.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.requestApiKey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.requestApiKey.$post> }) =>
        parseResponse(client.requestApiKey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoadDistanceKey() {
  return ['roadDistance', '/roadDistance', 'POST'] as const
}

export function usePostRoadDistance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roadDistance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.roadDistance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoadDistanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.roadDistance.$post> }) =>
        parseResponse(client.roadDistance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoadDistanceConfirmCarbonOffsetKey() {
  return ['roadDistance', '/roadDistance/confirmCarbonOffset', 'PATCH'] as const
}

export function usePatchRoadDistanceConfirmCarbonOffset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.roadDistance.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.roadDistance.confirmCarbonOffset.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoadDistanceConfirmCarbonOffsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.roadDistance.confirmCarbonOffset.$patch> },
      ) => parseResponse(client.roadDistance.confirmCarbonOffset.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoadDistanceConfirmPaymentKey() {
  return ['roadDistance', '/roadDistance/confirmPayment', 'PATCH'] as const
}

export function usePatchRoadDistanceConfirmPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.roadDistance.confirmPayment.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.roadDistance.confirmPayment.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoadDistanceConfirmPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.roadDistance.confirmPayment.$patch> },
      ) => parseResponse(client.roadDistance.confirmPayment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoadDistanceConfirmPlantingKey() {
  return ['roadDistance', '/roadDistance/confirmPlanting', 'PATCH'] as const
}

export function usePatchRoadDistanceConfirmPlanting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.roadDistance.confirmPlanting.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.roadDistance.confirmPlanting.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoadDistanceConfirmPlantingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.roadDistance.confirmPlanting.$patch> },
      ) => parseResponse(client.roadDistance.confirmPlanting.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoadDistanceConfirmTransactionKey() {
  return ['roadDistance', '/roadDistance/confirmTransaction', 'PATCH'] as const
}

export function usePatchRoadDistanceConfirmTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.roadDistance.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.roadDistance.confirmTransaction.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoadDistanceConfirmTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.roadDistance.confirmTransaction.$patch> },
      ) => parseResponse(client.roadDistance.confirmTransaction.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUrbanDeliveryKey() {
  return ['urbanDelivery', '/urbanDelivery', 'POST'] as const
}

export function usePostUrbanDelivery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.urbanDelivery.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.urbanDelivery.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUrbanDeliveryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.urbanDelivery.$post> }) =>
        parseResponse(client.urbanDelivery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUrbanDeliveryConfirmCarbonOffsetKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmCarbonOffset', 'PATCH'] as const
}

export function usePatchUrbanDeliveryConfirmCarbonOffset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUrbanDeliveryConfirmCarbonOffsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.urbanDelivery.confirmCarbonOffset.$patch> },
      ) => parseResponse(client.urbanDelivery.confirmCarbonOffset.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUrbanDeliveryConfirmPaymentKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmPayment', 'PATCH'] as const
}

export function usePatchUrbanDeliveryConfirmPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.urbanDelivery.confirmPayment.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.urbanDelivery.confirmPayment.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUrbanDeliveryConfirmPaymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.urbanDelivery.confirmPayment.$patch> },
      ) => parseResponse(client.urbanDelivery.confirmPayment.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUrbanDeliveryConfirmPlantingKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmPlanting', 'PATCH'] as const
}

export function usePatchUrbanDeliveryConfirmPlanting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.urbanDelivery.confirmPlanting.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.urbanDelivery.confirmPlanting.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUrbanDeliveryConfirmPlantingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.urbanDelivery.confirmPlanting.$patch> },
      ) => parseResponse(client.urbanDelivery.confirmPlanting.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUrbanDeliveryConfirmTransactionKey() {
  return ['urbanDelivery', '/urbanDelivery/confirmTransaction', 'PATCH'] as const
}

export function usePatchUrbanDeliveryConfirmTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.urbanDelivery.confirmTransaction.$patch>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.urbanDelivery.confirmTransaction.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUrbanDeliveryConfirmTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.urbanDelivery.confirmTransaction.$patch> },
      ) => parseResponse(client.urbanDelivery.confirmTransaction.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
