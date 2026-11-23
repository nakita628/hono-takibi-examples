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

export function getApplePayKey() {
  return ['applePay'] as const
}

export function getCalculateTaxKey() {
  return ['calculateTax'] as const
}

export function getCancelsKey() {
  return ['cancels'] as const
}

export function getCardDetailsKey() {
  return ['cardDetails'] as const
}

export function getDonationCampaignsKey() {
  return ['donationCampaigns'] as const
}

export function getDonationsKey() {
  return ['donations'] as const
}

export function getForwardKey() {
  return ['forward'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOriginKeysKey() {
  return ['originKeys'] as const
}

export function getPaymentLinksKey() {
  return ['paymentLinks'] as const
}

export function getPaymentMethodsKey() {
  return ['paymentMethods'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getPaypalKey() {
  return ['paypal'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getStoredPaymentMethodsKey() {
  return ['storedPaymentMethods'] as const
}

export function getValidateShopperIdKey() {
  return ['validateShopperId'] as const
}

export function getVerifyShopperTaxIdentificationKey() {
  return ['verifyShopperTaxIdentification'] as const
}

export function getPostApplePaySessionsMutationKey() {
  return ['applePay', '/applePay/sessions', 'POST'] as const
}

export function getPostApplePaySessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applePay.sessions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applePay.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplePaySessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applePay.sessions.$post>) {
      return parseResponse(client.applePay.sessions.$post(args, options))
    },
  })
}

export function injectPostApplePaySessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.applePay.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.applePay.sessions.$post>,
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
    const mutationDefaults = getPostApplePaySessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCancelsMutationKey() {
  return ['cancels', '/cancels', 'POST'] as const
}

export function getPostCancelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancels.$post>>>>>,
    TError,
    InferRequestType<typeof client.cancels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancels.$post>) {
      return parseResponse(client.cancels.$post(args, options))
    },
  })
}

export function injectPostCancels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancels.$post>>>>>,
        TError,
        InferRequestType<typeof client.cancels.$post>,
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
    const mutationDefaults = getPostCancelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCardDetailsMutationKey() {
  return ['cardDetails', '/cardDetails', 'POST'] as const
}

export function getPostCardDetailsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardDetails.$post>>>>>,
    TError,
    InferRequestType<typeof client.cardDetails.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cardDetails.$post>) {
      return parseResponse(client.cardDetails.$post(args, options))
    },
  })
}

export function injectPostCardDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardDetails.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.cardDetails.$post>,
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
    const mutationDefaults = getPostCardDetailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDonationCampaignsMutationKey() {
  return ['donationCampaigns', '/donationCampaigns', 'POST'] as const
}

export function getPostDonationCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donationCampaigns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.donationCampaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDonationCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.donationCampaigns.$post>) {
      return parseResponse(client.donationCampaigns.$post(args, options))
    },
  })
}

export function injectPostDonationCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.donationCampaigns.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.donationCampaigns.$post>,
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
    const mutationDefaults = getPostDonationCampaignsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDonationsMutationKey() {
  return ['donations', '/donations', 'POST'] as const
}

export function getPostDonationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donations.$post>>>>>,
    TError,
    InferRequestType<typeof client.donations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDonationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.donations.$post>) {
      return parseResponse(client.donations.$post(args, options))
    },
  })
}

export function injectPostDonations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.donations.$post>,
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
    const mutationDefaults = getPostDonationsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostForwardMutationKey() {
  return ['forward', '/forward', 'POST'] as const
}

export function getPostForwardMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forward.$post>>>>>,
    TError,
    InferRequestType<typeof client.forward.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostForwardMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.forward.$post>) {
      return parseResponse(client.forward.$post(args, options))
    },
  })
}

export function injectPostForward<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forward.$post>>>>>,
        TError,
        InferRequestType<typeof client.forward.$post>,
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
    const mutationDefaults = getPostForwardMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOrders<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOrdersCancelMutationKey() {
  return ['orders', '/orders/cancel', 'POST'] as const
}

export function getPostOrdersCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.orders.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.cancel.$post>) {
      return parseResponse(client.orders.cancel.$post(args, options))
    },
  })
}

export function injectPostOrdersCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.orders.cancel.$post>,
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
    const mutationDefaults = getPostOrdersCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOriginKeysMutationKey() {
  return ['originKeys', '/originKeys', 'POST'] as const
}

export function getPostOriginKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.originKeys.$post>>>>>,
    TError,
    InferRequestType<typeof client.originKeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOriginKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.originKeys.$post>) {
      return parseResponse(client.originKeys.$post(args, options))
    },
  })
}

export function injectPostOriginKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.originKeys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.originKeys.$post>,
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
    const mutationDefaults = getPostOriginKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPaymentLinksMutationKey() {
  return ['paymentLinks', '/paymentLinks', 'POST'] as const
}

export function getPostPaymentLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentLinks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.paymentLinks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentLinks.$post>) {
      return parseResponse(client.paymentLinks.$post(args, options))
    },
  })
}

export function injectPostPaymentLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentLinks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.paymentLinks.$post>,
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
    const mutationDefaults = getPostPaymentLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentLinksLinkIdQueryKey(
  args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$get']>,
) {
  return ['paymentLinks', '/paymentLinks/:linkId', args] as const
}

export function getPaymentLinksLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentLinksLinkIdQueryKey>
  >({
    queryKey: getPaymentLinksLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.paymentLinks[':linkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentLinksLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.paymentLinks)[':linkId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentLinksLinkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentLinksLinkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchPaymentLinksLinkIdMutationKey() {
  return ['paymentLinks', '/paymentLinks/:linkId', 'PATCH'] as const
}

export function getPatchPaymentLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.paymentLinks)[':linkId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentLinksLinkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$patch']>) {
      return parseResponse(client.paymentLinks[':linkId'].$patch(args, options))
    },
  })
}

export function injectPatchPaymentLinksLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.paymentLinks)[':linkId']['$patch']>,
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
    const mutationDefaults = getPatchPaymentLinksLinkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPaymentMethodsMutationKey() {
  return ['paymentMethods', '/paymentMethods', 'POST'] as const
}

export function getPostPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.paymentMethods.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentMethods.$post>) {
      return parseResponse(client.paymentMethods.$post(args, options))
    },
  })
}

export function injectPostPaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.paymentMethods.$post>,
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
    const mutationDefaults = getPostPaymentMethodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPaymentMethodsBalanceMutationKey() {
  return ['paymentMethods', '/paymentMethods/balance', 'POST'] as const
}

export function getPostPaymentMethodsBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.balance.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.paymentMethods.balance.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentMethodsBalanceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentMethods.balance.$post>) {
      return parseResponse(client.paymentMethods.balance.$post(args, options))
    },
  })
}

export function injectPostPaymentMethodsBalance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.balance.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.paymentMethods.balance.$post>,
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
    const mutationDefaults = getPostPaymentMethodsBalanceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPaymentsMutationKey() {
  return ['payments', '/payments', 'POST'] as const
}

export function getPostPaymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>>,
    TError,
    InferRequestType<typeof client.payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.$post>) {
      return parseResponse(client.payments.$post(args, options))
    },
  })
}

export function injectPostPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.payments.$post>,
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
    const mutationDefaults = getPostPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPaymentsDetailsMutationKey() {
  return ['payments', '/payments/details', 'POST'] as const
}

export function getPostPaymentsDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.details.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payments.details.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsDetailsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.details.$post>) {
      return parseResponse(client.payments.details.$post(args, options))
    },
  })
}

export function injectPostPaymentsDetails<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.details.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payments.details.$post>,
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
    const mutationDefaults = getPostPaymentsDetailsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPaymentsPaymentPspReferenceAmountUpdatesMutationKey() {
  return ['payments', '/payments/:paymentPspReference/amountUpdates', 'POST'] as const
}

export function getPostPaymentsPaymentPspReferenceAmountUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentPspReferenceAmountUpdatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']
      >,
    ) {
      return parseResponse(
        client.payments[':paymentPspReference'].amountUpdates.$post(args, options),
      )
    },
  })
}

export function injectPostPaymentsPaymentPspReferenceAmountUpdates<
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
                  (typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']
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
    const mutationDefaults = getPostPaymentsPaymentPspReferenceAmountUpdatesMutationOptions<
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

export function getPostPaymentsPaymentPspReferenceCancelsMutationKey() {
  return ['payments', '/payments/:paymentPspReference/cancels', 'POST'] as const
}

export function getPostPaymentsPaymentPspReferenceCancelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentPspReferenceCancelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>,
    ) {
      return parseResponse(client.payments[':paymentPspReference'].cancels.$post(args, options))
    },
  })
}

export function injectPostPaymentsPaymentPspReferenceCancels<
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
                ReturnType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentPspReferenceCancelsMutationOptions<
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

export function getPostPaymentsPaymentPspReferenceCapturesMutationKey() {
  return ['payments', '/payments/:paymentPspReference/captures', 'POST'] as const
}

export function getPostPaymentsPaymentPspReferenceCapturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentPspReferenceCapturesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>,
    ) {
      return parseResponse(client.payments[':paymentPspReference'].captures.$post(args, options))
    },
  })
}

export function injectPostPaymentsPaymentPspReferenceCaptures<
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
                ReturnType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentPspReferenceCapturesMutationOptions<
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

export function getPostPaymentsPaymentPspReferenceRefundsMutationKey() {
  return ['payments', '/payments/:paymentPspReference/refunds', 'POST'] as const
}

export function getPostPaymentsPaymentPspReferenceRefundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentPspReferenceRefundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>,
    ) {
      return parseResponse(client.payments[':paymentPspReference'].refunds.$post(args, options))
    },
  })
}

export function injectPostPaymentsPaymentPspReferenceRefunds<
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
                ReturnType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentPspReferenceRefundsMutationOptions<
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

export function getPostPaymentsPaymentPspReferenceReversalsMutationKey() {
  return ['payments', '/payments/:paymentPspReference/reversals', 'POST'] as const
}

export function getPostPaymentsPaymentPspReferenceReversalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':paymentPspReference']['reversals']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['reversals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentPspReferenceReversalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':paymentPspReference']['reversals']['$post']
      >,
    ) {
      return parseResponse(client.payments[':paymentPspReference'].reversals.$post(args, options))
    },
  })
}

export function injectPostPaymentsPaymentPspReferenceReversals<
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
                ReturnType<(typeof client.payments)[':paymentPspReference']['reversals']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payments)[':paymentPspReference']['reversals']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentPspReferenceReversalsMutationOptions<
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

export function getPostPaypalUpdateOrderMutationKey() {
  return ['paypal', '/paypal/updateOrder', 'POST'] as const
}

export function getPostPaypalUpdateOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paypal.updateOrder.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.paypal.updateOrder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaypalUpdateOrderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paypal.updateOrder.$post>) {
      return parseResponse(client.paypal.updateOrder.$post(args, options))
    },
  })
}

export function injectPostPaypalUpdateOrder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.paypal.updateOrder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.paypal.updateOrder.$post>,
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
    const mutationDefaults = getPostPaypalUpdateOrderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSessionsMutationKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function getPostSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    InferRequestType<typeof client.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.$post>) {
      return parseResponse(client.sessions.$post(args, options))
    },
  })
}

export function injectPostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sessions.$post>,
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
    const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.sessions)[':sessionId']['$get']>,
) {
  return ['sessions', '/sessions/:sessionId', args] as const
}

export function getSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdQueryKey>
  >({
    queryKey: getSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions[':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sessions)[':sessionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionsSessionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchSessionsSessionIdMutationKey() {
  return ['sessions', '/sessions/:sessionId', 'PATCH'] as const
}

export function getPatchSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':sessionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSessionsSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':sessionId']['$patch']>) {
      return parseResponse(client.sessions[':sessionId'].$patch(args, options))
    },
  })
}

export function injectPatchSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sessions)[':sessionId']['$patch']>,
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
    const mutationDefaults = getPatchSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getStoredPaymentMethodsQueryKey(
  args: InferRequestType<typeof client.storedPaymentMethods.$get>,
) {
  return ['storedPaymentMethods', '/storedPaymentMethods', args] as const
}

export function getStoredPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.storedPaymentMethods.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStoredPaymentMethodsQueryKey>
  >({
    queryKey: getStoredPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storedPaymentMethods.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStoredPaymentMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.storedPaymentMethods.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoredPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStoredPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostStoredPaymentMethodsMutationKey() {
  return ['storedPaymentMethods', '/storedPaymentMethods', 'POST'] as const
}

export function getPostStoredPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.storedPaymentMethods.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoredPaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.storedPaymentMethods.$post>) {
      return parseResponse(client.storedPaymentMethods.$post(args, options))
    },
  })
}

export function injectPostStoredPaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.storedPaymentMethods.$post>,
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
    const mutationDefaults = getPostStoredPaymentMethodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteStoredPaymentMethodsStoredPaymentMethodIdMutationKey() {
  return ['storedPaymentMethods', '/storedPaymentMethods/:storedPaymentMethodId', 'DELETE'] as const
}

export function getDeleteStoredPaymentMethodsStoredPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStoredPaymentMethodsStoredPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']
      >,
    ) {
      return parseResponse(
        client.storedPaymentMethods[':storedPaymentMethodId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteStoredPaymentMethodsStoredPaymentMethodId<
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
                    (typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']>,
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
    const mutationDefaults = getDeleteStoredPaymentMethodsStoredPaymentMethodIdMutationOptions<
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

export function getPostCalculateTaxMutationKey() {
  return ['calculateTax', '/calculateTax', 'POST'] as const
}

export function getPostCalculateTaxMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calculateTax.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.calculateTax.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCalculateTaxMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.calculateTax.$post>) {
      return parseResponse(client.calculateTax.$post(args, options))
    },
  })
}

export function injectPostCalculateTax<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calculateTax.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.calculateTax.$post>,
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
    const mutationDefaults = getPostCalculateTaxMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostValidateShopperIdMutationKey() {
  return ['validateShopperId', '/validateShopperId', 'POST'] as const
}

export function getPostValidateShopperIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validateShopperId.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.validateShopperId.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateShopperIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validateShopperId.$post>) {
      return parseResponse(client.validateShopperId.$post(args, options))
    },
  })
}

export function injectPostValidateShopperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.validateShopperId.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.validateShopperId.$post>,
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
    const mutationDefaults = getPostValidateShopperIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVerifyShopperTaxIdentificationMutationKey() {
  return ['verifyShopperTaxIdentification', '/verifyShopperTaxIdentification', 'POST'] as const
}

export function getPostVerifyShopperTaxIdentificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.verifyShopperTaxIdentification.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.verifyShopperTaxIdentification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyShopperTaxIdentificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.verifyShopperTaxIdentification.$post>) {
      return parseResponse(client.verifyShopperTaxIdentification.$post(args, options))
    },
  })
}

export function injectPostVerifyShopperTaxIdentification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.verifyShopperTaxIdentification.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.verifyShopperTaxIdentification.$post>,
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
    const mutationDefaults = getPostVerifyShopperTaxIdentificationMutationOptions<
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
