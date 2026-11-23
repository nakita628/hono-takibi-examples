import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getCheckoutKey() {
  return ['checkout'] as const
}

export function getPostApiCheckoutPubGatewayCallbackOrderGroupMutationKey() {
  return ['api', '/api/checkout/pub/gatewayCallback/:orderGroup', 'POST'] as const
}

export function getPostApiCheckoutPubGatewayCallbackOrderGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubGatewayCallbackOrderGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.gatewayCallback[':orderGroup'].$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPubGatewayCallbackOrderGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.checkout.pub.gatewayCallback)[':orderGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubGatewayCallbackOrderGroupMutationOptions<
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

export function getApiCheckoutPubOrderFormQueryKey(
  args: InferRequestType<typeof client.api.checkout.pub.orderForm.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/orderForm', keyArgs] as const
}

export function getApiCheckoutPubOrderFormQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.checkout.pub.orderForm.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPubOrderFormQueryKey>
  >({
    queryKey: getApiCheckoutPubOrderFormQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pub.orderForm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPubOrderForm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.checkout.pub.orderForm.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.checkout.pub.orderForm.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPubOrderFormQueryKey>
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
      ...getApiCheckoutPubOrderFormQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCheckoutPubOrderFormOrderFormIdQueryKey(
  args: InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/orderForm/:orderFormId', keyArgs] as const
}

export function getApiCheckoutPubOrderFormOrderFormIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPubOrderFormOrderFormIdQueryKey>
  >({
    queryKey: getApiCheckoutPubOrderFormOrderFormIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPubOrderFormOrderFormId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPubOrderFormOrderFormIdQueryKey>
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
      ...getApiCheckoutPubOrderFormOrderFormIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/clientPreferencesData',
    'POST',
  ] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientPreferencesData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientPreferencesData']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].attachments.clientPreferencesData.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientPreferencesData']['$post']
          >,
          TOnMutateResult
        >
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
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/clientProfileData',
    'POST',
  ] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientProfileData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientProfileData']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].attachments.clientProfileData.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['clientProfileData']['$post']
          >,
          TOnMutateResult
        >
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
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/marketingData',
    'POST',
  ] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['marketingData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['marketingData']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].attachments.marketingData.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['marketingData']['$post']
          >,
          TOnMutateResult
        >
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
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/merchantContextData',
    'POST',
  ] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['merchantContextData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['merchantContextData']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].attachments.merchantContextData.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['merchantContextData']['$post']
          >,
          TOnMutateResult
        >
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
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/paymentData',
    'POST',
  ] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['paymentData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['paymentData']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].attachments.paymentData.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['paymentData']['$post']
          >,
          TOnMutateResult
        >
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
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/attachments/shippingData',
    'POST',
  ] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['shippingData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['shippingData']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].attachments.shippingData.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['attachments']['shippingData']['$post']
          >,
          TOnMutateResult
        >
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
      getPostApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdCouponsMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/coupons', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['coupons']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdCouponsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['coupons']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].coupons.$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdCoupons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['coupons']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubOrderFormOrderFormIdCouponsMutationOptions<
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

export function getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/customData/:appId', 'PUT'] as const
}

export function getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'].$put(args, options),
      )
    },
  })
}

export function createPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdMutationOptions<
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

export function getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/customData/:appId/:appFieldName',
    'PUT',
  ] as const
}

export function getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$put']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'][
          ':appFieldName'
        ].$put(args, options),
      )
    },
  })
}

export function createPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$put']
          >,
          TOnMutateResult
        >
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
      getPutApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationOptions<
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

export function getDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationKey() {
  return [
    'api',
    '/api/checkout/pub/orderForm/:orderFormId/customData/:appId/:appFieldName',
    'DELETE',
  ] as const
}

export function getDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].customData[':appId'][
          ':appFieldName'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['customData'][':appId'][':appFieldName']['$delete']
          >,
          TOnMutateResult
        >
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
      getDeleteApiCheckoutPubOrderFormOrderFormIdCustomDataAppIdAppFieldNameMutationOptions<
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

export function getApiCheckoutPubOrderFormOrderFormIdInstallmentsQueryKey(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/installments', keyArgs] as const
}

export function getApiCheckoutPubOrderFormOrderFormIdInstallmentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPubOrderFormOrderFormIdInstallmentsQueryKey>
  >({
    queryKey: getApiCheckoutPubOrderFormOrderFormIdInstallmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].installments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPubOrderFormOrderFormIdInstallments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['installments']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPubOrderFormOrderFormIdInstallmentsQueryKey>
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
      ...getApiCheckoutPubOrderFormOrderFormIdInstallmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].items.$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubOrderFormOrderFormIdItemsMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items/removeAll', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['removeAll']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['removeAll']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].items.removeAll.$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['removeAll']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsUpdateMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items/update', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdItemsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdItemsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].items.update.$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdItemsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items']['update']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubOrderFormOrderFormIdItemsUpdateMutationOptions<
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

export function getPutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/items/:itemIndex/price', 'PUT'] as const
}

export function getPutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items'][':itemIndex']['price']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items'][':itemIndex']['price']['$put']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].items[':itemIndex'].price.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPrice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['items'][':itemIndex']['price']['$put']
          >,
          TOnMutateResult
        >
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
      getPutApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdMessagesClearMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/messages/clear', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdMessagesClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['messages']['clear']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdMessagesClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['messages']['clear']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].messages.clear.$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdMessagesClear<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['messages']['clear']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubOrderFormOrderFormIdMessagesClearMutationOptions<
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

export function getPatchApiCheckoutPubOrderFormOrderFormIdProfileMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/profile', 'PATCH'] as const
}

export function getPatchApiCheckoutPubOrderFormOrderFormIdProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['profile']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCheckoutPubOrderFormOrderFormIdProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['profile']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].profile.$patch(args, options),
      )
    },
  })
}

export function createPatchApiCheckoutPubOrderFormOrderFormIdProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['profile']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiCheckoutPubOrderFormOrderFormIdProfileMutationOptions<
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

export function getPostApiCheckoutPubOrderFormOrderFormIdTransactionMutationKey() {
  return ['api', '/api/checkout/pub/orderForm/:orderFormId/transaction', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormOrderFormIdTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pub.orderForm)[':orderFormId']['transaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormOrderFormIdTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pub.orderForm)[':orderFormId']['transaction']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pub.orderForm[':orderFormId'].transaction.$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPubOrderFormOrderFormIdTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pub.orderForm)[':orderFormId']['transaction']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubOrderFormOrderFormIdTransactionMutationOptions<
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

export function getPostApiCheckoutPubOrderFormsSimulationMutationKey() {
  return ['api', '/api/checkout/pub/orderForms/simulation', 'POST'] as const
}

export function getPostApiCheckoutPubOrderFormsSimulationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.checkout.pub.orderForms.simulation.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPubOrderFormsSimulationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
    ) {
      return parseResponse(client.api.checkout.pub.orderForms.simulation.$post(args, options))
    },
  })
}

export function createPostApiCheckoutPubOrderFormsSimulation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.checkout.pub.orderForms.simulation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.checkout.pub.orderForms.simulation.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPubOrderFormsSimulationMutationOptions<
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

export function getPutApiCheckoutPubOrdersMutationKey() {
  return ['api', '/api/checkout/pub/orders', 'PUT'] as const
}

export function getPutApiCheckoutPubOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orders.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.checkout.pub.orders.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCheckoutPubOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.checkout.pub.orders.$put>) {
      return parseResponse(client.api.checkout.pub.orders.$put(args, options))
    },
  })
}

export function createPutApiCheckoutPubOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.orders.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.checkout.pub.orders.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiCheckoutPubOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCheckoutPubPickupPointsQueryKey(
  args: InferRequestType<(typeof client.api.checkout.pub)['pickup-points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/pickup-points', keyArgs] as const
}

export function getApiCheckoutPubPickupPointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.checkout.pub)['pickup-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPubPickupPointsQueryKey>
  >({
    queryKey: getApiCheckoutPubPickupPointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pub['pickup-points'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPubPickupPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.checkout.pub)['pickup-points']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.checkout.pub)['pickup-points']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPubPickupPointsQueryKey>
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
      ...getApiCheckoutPubPickupPointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCheckoutPubPostalCodeCountryCodePostalCodeQueryKey(
  args: InferRequestType<
    (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/postal-code/:countryCode/:postalCode', keyArgs] as const
}

export function getApiCheckoutPubPostalCodeCountryCodePostalCodeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPubPostalCodeCountryCodePostalCodeQueryKey>
  >({
    queryKey: getApiCheckoutPubPostalCodeCountryCodePostalCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pub['postal-code'][':countryCode'][':postalCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPubPostalCodeCountryCodePostalCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.checkout.pub)['postal-code'][':countryCode'][':postalCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPubPostalCodeCountryCodePostalCodeQueryKey>
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
      ...getApiCheckoutPubPostalCodeCountryCodePostalCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiCheckoutPubProfilesQueryKey(
  args: InferRequestType<typeof client.api.checkout.pub.profiles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/profiles', keyArgs] as const
}

export function getApiCheckoutPubProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.checkout.pub.profiles.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPubProfilesQueryKey>
  >({
    queryKey: getApiCheckoutPubProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pub.profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPubProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.checkout.pub.profiles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.checkout.pub.profiles.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPubProfilesQueryKey>
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
      ...getApiCheckoutPubProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCheckoutPubRegionsRegionIdQueryKey(
  args: InferRequestType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pub/regions/:regionId', keyArgs] as const
}

export function getApiCheckoutPubRegionsRegionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPubRegionsRegionIdQueryKey>
  >({
    queryKey: getApiCheckoutPubRegionsRegionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pub.regions[':regionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPubRegionsRegionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.checkout.pub.regions)[':regionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPubRegionsRegionIdQueryKey>
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
      ...getApiCheckoutPubRegionsRegionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiCheckoutPvtConfigurationOrderFormQueryKey(
  args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pvt/configuration/orderForm', keyArgs] as const
}

export function getApiCheckoutPvtConfigurationOrderFormQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPvtConfigurationOrderFormQueryKey>
  >({
    queryKey: getApiCheckoutPvtConfigurationOrderFormQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pvt.configuration.orderForm.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPvtConfigurationOrderForm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPvtConfigurationOrderFormQueryKey>
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
      ...getApiCheckoutPvtConfigurationOrderFormQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiCheckoutPvtConfigurationOrderFormMutationKey() {
  return ['api', '/api/checkout/pvt/configuration/orderForm', 'POST'] as const
}

export function getPostApiCheckoutPvtConfigurationOrderFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPvtConfigurationOrderFormMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$post>,
    ) {
      return parseResponse(client.api.checkout.pvt.configuration.orderForm.$post(args, options))
    },
  })
}

export function createPostApiCheckoutPvtConfigurationOrderForm<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.api.checkout.pvt.configuration.orderForm.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.api.checkout.pvt.configuration.orderForm.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPvtConfigurationOrderFormMutationOptions<
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

export function getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', keyArgs] as const
}

export function getApiCheckoutPvtConfigurationWindowToChangeSellerQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey>
  >({
    queryKey: getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pvt.configuration['window-to-change-seller'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPvtConfigurationWindowToChangeSeller<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey>
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
      ...getApiCheckoutPvtConfigurationWindowToChangeSellerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationKey() {
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', 'POST'] as const
}

export function getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pvt.configuration['window-to-change-seller'].$post(args, options),
      )
    },
  })
}

export function createPostApiCheckoutPvtConfigurationWindowToChangeSeller<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationOptions<
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

export function getCheckoutChangeToAnonymousUserOrderFormIdQueryKey(
  args: InferRequestType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checkout', '/checkout/changeToAnonymousUser/:orderFormId', keyArgs] as const
}

export function getCheckoutChangeToAnonymousUserOrderFormIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckoutChangeToAnonymousUserOrderFormIdQueryKey>
  >({
    queryKey: getCheckoutChangeToAnonymousUserOrderFormIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checkout.changeToAnonymousUser[':orderFormId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCheckoutChangeToAnonymousUserOrderFormId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.checkout.changeToAnonymousUser)[':orderFormId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCheckoutChangeToAnonymousUserOrderFormIdQueryKey>
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
      ...getCheckoutChangeToAnonymousUserOrderFormIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
