import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApplePayKey() {
  return ['applePay'] as const
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

export function getPostApplePaySessionsKey() {
  return ['applePay', '/applePay/sessions', 'POST'] as const
}

export function usePostApplePaySessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applePay.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.applePay.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplePaySessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.applePay.sessions.$post> }) =>
        parseResponse(client.applePay.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelsKey() {
  return ['cancels', '/cancels', 'POST'] as const
}

export function usePostCancels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cancels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cancels.$post> }) =>
        parseResponse(client.cancels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardDetailsKey() {
  return ['cardDetails', '/cardDetails', 'POST'] as const
}

export function usePostCardDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cardDetails.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cardDetails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cardDetails.$post> }) =>
        parseResponse(client.cardDetails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDonationCampaignsKey() {
  return ['donationCampaigns', '/donationCampaigns', 'POST'] as const
}

export function usePostDonationCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donationCampaigns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.donationCampaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDonationCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.donationCampaigns.$post> }) =>
        parseResponse(client.donationCampaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDonationsKey() {
  return ['donations', '/donations', 'POST'] as const
}

export function usePostDonations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.donations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.donations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDonationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.donations.$post> }) =>
        parseResponse(client.donations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostForwardKey() {
  return ['forward', '/forward', 'POST'] as const
}

export function usePostForward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forward.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.forward.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostForwardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.forward.$post> }) =>
        parseResponse(client.forward.$post(arg, clientOptions)),
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

export function getPostOrdersCancelKey() {
  return ['orders', '/orders/cancel', 'POST'] as const
}

export function usePostOrdersCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.cancel.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.orders.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.cancel.$post> }) =>
        parseResponse(client.orders.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOriginKeysKey() {
  return ['originKeys', '/originKeys', 'POST'] as const
}

export function usePostOriginKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.originKeys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.originKeys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOriginKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.originKeys.$post> }) =>
        parseResponse(client.originKeys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentLinksKey() {
  return ['paymentLinks', '/paymentLinks', 'POST'] as const
}

export function usePostPaymentLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentLinks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentLinks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.paymentLinks.$post> }) =>
        parseResponse(client.paymentLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentLinksLinkIdKey(
  args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$get']>,
) {
  return ['paymentLinks', '/paymentLinks/:linkId', args] as const
}

export function useGetPaymentLinksLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>>
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
        ? getGetPaymentLinksLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentLinks[':linkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentLinksLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>>
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
        ? getGetPaymentLinksLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentLinks[':linkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPaymentLinksLinkIdKey() {
  return ['paymentLinks', '/paymentLinks/:linkId', 'PATCH'] as const
}

export function usePatchPaymentLinksLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.paymentLinks)[':linkId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.paymentLinks)[':linkId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentLinksLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.paymentLinks)[':linkId']['$patch']> },
      ) => parseResponse(client.paymentLinks[':linkId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentMethodsKey() {
  return ['paymentMethods', '/paymentMethods', 'POST'] as const
}

export function usePostPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentMethods.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.paymentMethods.$post> }) =>
        parseResponse(client.paymentMethods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentMethodsBalanceKey() {
  return ['paymentMethods', '/paymentMethods/balance', 'POST'] as const
}

export function usePostPaymentMethodsBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.balance.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentMethods.balance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentMethodsBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.paymentMethods.balance.$post> },
      ) => parseResponse(client.paymentMethods.balance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsKey() {
  return ['payments', '/payments', 'POST'] as const
}

export function usePostPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payments.$post> }) =>
        parseResponse(client.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsDetailsKey() {
  return ['payments', '/payments/details', 'POST'] as const
}

export function usePostPaymentsDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.details.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payments.details.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payments.details.$post> }) =>
        parseResponse(client.payments.details.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentPspReferenceAmountUpdatesKey() {
  return ['payments', '/payments/:paymentPspReference/amountUpdates', 'POST'] as const
}

export function usePostPaymentsPaymentPspReferenceAmountUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentPspReferenceAmountUpdatesKey()
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
            (typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payments[':paymentPspReference'].amountUpdates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentPspReferenceCancelsKey() {
  return ['payments', '/payments/:paymentPspReference/cancels', 'POST'] as const
}

export function usePostPaymentsPaymentPspReferenceCancels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentPspReferenceCancelsKey()
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
            (typeof client.payments)[':paymentPspReference']['cancels']['$post']
          >
        },
      ) => parseResponse(client.payments[':paymentPspReference'].cancels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentPspReferenceCapturesKey() {
  return ['payments', '/payments/:paymentPspReference/captures', 'POST'] as const
}

export function usePostPaymentsPaymentPspReferenceCaptures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentPspReferenceCapturesKey()
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
            (typeof client.payments)[':paymentPspReference']['captures']['$post']
          >
        },
      ) =>
        parseResponse(client.payments[':paymentPspReference'].captures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentPspReferenceRefundsKey() {
  return ['payments', '/payments/:paymentPspReference/refunds', 'POST'] as const
}

export function usePostPaymentsPaymentPspReferenceRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentPspReferenceRefundsKey()
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
            (typeof client.payments)[':paymentPspReference']['refunds']['$post']
          >
        },
      ) => parseResponse(client.payments[':paymentPspReference'].refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentPspReferenceReversalsKey() {
  return ['payments', '/payments/:paymentPspReference/reversals', 'POST'] as const
}

export function usePostPaymentsPaymentPspReferenceReversals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.payments)[':paymentPspReference']['reversals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentPspReferenceReversalsKey()
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
            (typeof client.payments)[':paymentPspReference']['reversals']['$post']
          >
        },
      ) =>
        parseResponse(client.payments[':paymentPspReference'].reversals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaypalUpdateOrderKey() {
  return ['paypal', '/paypal/updateOrder', 'POST'] as const
}

export function usePostPaypalUpdateOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paypal.updateOrder.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.paypal.updateOrder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaypalUpdateOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.paypal.updateOrder.$post> }) =>
        parseResponse(client.paypal.updateOrder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSessionsKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function usePostSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sessions.$post> }) =>
        parseResponse(client.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionsSessionIdKey(
  args: InferRequestType<(typeof client.sessions)[':sessionId']['$get']>,
) {
  return ['sessions', '/sessions/:sessionId', args] as const
}

export function useGetSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>>
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
        ? getGetSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>>
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
        ? getGetSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':sessionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStoredPaymentMethodsKey(
  args: InferRequestType<typeof client.storedPaymentMethods.$get>,
) {
  return ['storedPaymentMethods', '/storedPaymentMethods', args] as const
}

export function useGetStoredPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.storedPaymentMethods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>
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
        ? getGetStoredPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storedPaymentMethods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStoredPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.storedPaymentMethods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>
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
        ? getGetStoredPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storedPaymentMethods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStoredPaymentMethodsKey() {
  return ['storedPaymentMethods', '/storedPaymentMethods', 'POST'] as const
}

export function usePostStoredPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.storedPaymentMethods.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.storedPaymentMethods.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStoredPaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.storedPaymentMethods.$post> },
      ) => parseResponse(client.storedPaymentMethods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStoredPaymentMethodsStoredPaymentMethodIdKey() {
  return ['storedPaymentMethods', '/storedPaymentMethods/:storedPaymentMethodId', 'DELETE'] as const
}

export function useDeleteStoredPaymentMethodsStoredPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStoredPaymentMethodsStoredPaymentMethodIdKey()
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
            (typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.storedPaymentMethods[':storedPaymentMethodId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostValidateShopperIdKey() {
  return ['validateShopperId', '/validateShopperId', 'POST'] as const
}

export function usePostValidateShopperId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validateShopperId.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.validateShopperId.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidateShopperIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.validateShopperId.$post> }) =>
        parseResponse(client.validateShopperId.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
