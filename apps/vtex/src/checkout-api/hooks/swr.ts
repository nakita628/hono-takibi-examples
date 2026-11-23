import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getCheckoutKey() {
  return ['checkout'] as const
}

export function getPostApiCheckoutPubGatewayCallbackOrderGroupKey() {
  return ['api', '/api/checkout/pub/gatewayCallback/:orderGroup', 'POST'] as const
}

export function usePostApiCheckoutPubGatewayCallbackOrderGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubGatewayCallbackOrderGroupKey()
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
            (typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.gatewayCallback[':orderGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCheckoutPubOrderFormKey(
  args: InferRequestType<typeof client.api.checkout.pub.orderForm.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/orderForm', keyArgs] as const
}

export function useGetApiCheckoutPubOrderForm<TError = unknown>(
  args: InferRequestType<typeof client.api.checkout.pub.orderForm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>>
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
        ? getGetApiCheckoutPubOrderFormKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.checkout.pub.orderForm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPubOrderForm<TError = unknown>(
  args: InferRequestType<typeof client.api.checkout.pub.orderForm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>>
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
        ? getGetApiCheckoutPubOrderFormKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.checkout.pub.orderForm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCheckoutPubOrderFormOrderFormIdKey(
  args: InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/orderForm/:orderFormId', keyArgs] as const
}

export function useGetApiCheckoutPubOrderFormOrderFormId<TError = unknown>(
  args: InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>>
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
        ? getGetApiCheckoutPubOrderFormOrderFormIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.checkout.pub.orderForm[':orderFormId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPubOrderFormOrderFormId<TError = unknown>(
  args: InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>>
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
        ? getGetApiCheckoutPubOrderFormOrderFormIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.checkout.pub.orderForm[':orderFormId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/clientPreferencesData',
    'POST',
  ] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientPreferencesData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientPreferencesData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientPreferencesData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].attachments.clientPreferencesData.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/clientProfileData',
    'POST',
  ] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientProfileData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientProfileData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientProfileData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].attachments.clientProfileData.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/marketingData',
    'POST',
  ] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['marketingData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['marketingData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['marketingData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].attachments.marketingData.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/merchantContextData',
    'POST',
  ] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['merchantContextData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['merchantContextData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['merchantContextData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].attachments.merchantContextData.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/paymentData',
    'POST',
  ] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['paymentData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['paymentData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['paymentData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].attachments.paymentData.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/shippingData',
    'POST',
  ] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['shippingData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['shippingData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['shippingData']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].attachments.shippingData.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdCouponsKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/coupons', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['coupons']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['coupons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdCouponsKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['coupons']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].coupons.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/customData/:appId', 'PUT'] as const
}

export function usePutApiCheckoutPubOrderFormOrderFormIdCustomDataAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/customData/:appId/:appFieldName',
    'PUT',
  ] as const
}

export function usePutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'][
            ':appFieldName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/customData/:appId/:appFieldName',
    'DELETE',
  ] as const
}

export function useDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'][
            ':appFieldName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCheckoutPubOrderFormOrderFormIdInstallmentsKey(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/installments', keyArgs] as const
}

export function useGetApiCheckoutPubOrderFormOrderFormIdInstallments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
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
        ? getGetApiCheckoutPubOrderFormOrderFormIdInstallmentsKey(args)
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
                (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
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
          client.api.checkout.pub.orderForm[':orderFormId'].installments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPubOrderFormOrderFormIdInstallments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
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
        ? getGetApiCheckoutPubOrderFormOrderFormIdInstallmentsKey(args)
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
                (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
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
          client.api.checkout.pub.orderForm[':orderFormId'].installments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdItemsKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items/removeAll', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['removeAll']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['removeAll']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['removeAll']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].items.removeAll.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsUpdateKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items/update', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdItemsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdItemsUpdateKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].items.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items/:itemIndex/price', 'PUT'] as const
}

export function usePutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPrice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items'][':itemIndex']['price']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items'][':itemIndex']['price']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items'][':itemIndex']['price']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].items[':itemIndex'].price.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdMessagesClearKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/messages/clear', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdMessagesClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['messages']['clear']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['messages']['clear']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdMessagesClearKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['messages']['clear']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].messages.clear.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiCheckoutPubOrderFormOrderFormIdProfileKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/profile', 'PATCH'] as const
}

export function usePatchApiCheckoutPubOrderFormOrderFormIdProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['profile']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['profile']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCheckoutPubOrderFormOrderFormIdProfileKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['profile']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].profile.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormOrderFormIdTransactionKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/transaction', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormOrderFormIdTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pub.orderForm)[':orderFormId']['transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormOrderFormIdTransactionKey()
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
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pub.orderForm[':orderFormId'].transaction.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCheckoutPubOrderFormsSimulationKey() {
  return ['api', '/api/checkout/pub/orderForms/simulation', 'POST'] as const
}

export function usePostApiCheckoutPubOrderFormsSimulation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.checkout.pub.orderForms.simulation.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPubOrderFormsSimulationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post> },
      ) => parseResponse(client.api.checkout.pub.orderForms.simulation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiCheckoutPubOrdersKey() {
  return ['api', '/api/checkout/pub/orders', 'PUT'] as const
}

export function usePutApiCheckoutPubOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orders.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.checkout.pub.orders.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCheckoutPubOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.checkout.pub.orders.$put> },
      ) => parseResponse(client.api.checkout.pub.orders.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCheckoutPubPickupPointsKey(
  args: InferRequestType<(typeof client.api.checkout.pub)['pickup-points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/pickup-points', keyArgs] as const
}

export function useGetApiCheckoutPubPickupPoints<TError = unknown>(
  args: InferRequestType<(typeof client.api.checkout.pub)['pickup-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
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
        ? getGetApiCheckoutPubPickupPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.checkout.pub['pickup-points'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPubPickupPoints<TError = unknown>(
  args: InferRequestType<(typeof client.api.checkout.pub)['pickup-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
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
        ? getGetApiCheckoutPubPickupPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.checkout.pub['pickup-points'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCheckoutPubPostalCodeCountryCodePostalCodeKey(
  args: InferRequestType<
    (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/postal-code/:countryCode/:postalCode', keyArgs] as const
}

export function useGetApiCheckoutPubPostalCodeCountryCodePostalCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
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
        ? getGetApiCheckoutPubPostalCodeCountryCodePostalCodeKey(args)
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
                (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
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
          client.api.checkout.pub['postal-code'][':countryCode'][':postalCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPubPostalCodeCountryCodePostalCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
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
        ? getGetApiCheckoutPubPostalCodeCountryCodePostalCodeKey(args)
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
                (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
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
          client.api.checkout.pub['postal-code'][':countryCode'][':postalCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCheckoutPubProfilesKey(
  args: InferRequestType<typeof client.api.checkout.pub.profiles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/profiles', keyArgs] as const
}

export function useGetApiCheckoutPubProfiles<TError = unknown>(
  args: InferRequestType<typeof client.api.checkout.pub.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>>
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
        ? getGetApiCheckoutPubProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.checkout.pub.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPubProfiles<TError = unknown>(
  args: InferRequestType<typeof client.api.checkout.pub.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>>
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
        ? getGetApiCheckoutPubProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.checkout.pub.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCheckoutPubRegionsRegionIdKey(
  args: InferRequestType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/regions/:regionId', keyArgs] as const
}

export function useGetApiCheckoutPubRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
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
        ? getGetApiCheckoutPubRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.checkout.pub.regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPubRegionsRegionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
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
        ? getGetApiCheckoutPubRegionsRegionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.checkout.pub.regions[':regionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCheckoutPvtConfigurationOrderFormKey(
  args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pvt/configuration/orderForm', keyArgs] as const
}

export function useGetApiCheckoutPvtConfigurationOrderForm<TError = unknown>(
  args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
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
        ? getGetApiCheckoutPvtConfigurationOrderFormKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.checkout.pvt.configuration.orderForm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPvtConfigurationOrderForm<TError = unknown>(
  args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
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
        ? getGetApiCheckoutPvtConfigurationOrderFormKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.checkout.pvt.configuration.orderForm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCheckoutPvtConfigurationOrderFormKey() {
  return ['api', '/api/checkout/pvt/configuration/orderForm', 'POST'] as const
}

export function usePostApiCheckoutPvtConfigurationOrderForm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPvtConfigurationOrderFormKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$post> },
      ) => parseResponse(client.api.checkout.pvt.configuration.orderForm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCheckoutPvtConfigurationWindowToChangeSellerKey(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', keyArgs] as const
}

export function useGetApiCheckoutPvtConfigurationWindowToChangeSeller<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
        ? getGetApiCheckoutPvtConfigurationWindowToChangeSellerKey(args)
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
                (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
          client.api.checkout.pvt.configuration['window-to-change-seller'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPvtConfigurationWindowToChangeSeller<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
        ? getGetApiCheckoutPvtConfigurationWindowToChangeSellerKey(args)
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
                (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
          client.api.checkout.pvt.configuration['window-to-change-seller'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCheckoutPvtConfigurationWindowToChangeSellerKey() {
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', 'POST'] as const
}

export function usePostApiCheckoutPvtConfigurationWindowToChangeSeller<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPvtConfigurationWindowToChangeSellerKey()
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
            (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pvt.configuration['window-to-change-seller'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCheckoutChangeToAnonymousUserOrderFormIdKey(
  args: InferRequestType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checkout', '/checkout/changeToAnonymousUser/:orderFormId', keyArgs] as const
}

export function useGetCheckoutChangeToAnonymousUserOrderFormId<TError = unknown>(
  args: InferRequestType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>
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
        ? getGetCheckoutChangeToAnonymousUserOrderFormIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.checkout.changeToAnonymousUser[':orderFormId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckoutChangeToAnonymousUserOrderFormId<TError = unknown>(
  args: InferRequestType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>
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
        ? getGetCheckoutChangeToAnonymousUserOrderFormIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.checkout.changeToAnonymousUser[':orderFormId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
