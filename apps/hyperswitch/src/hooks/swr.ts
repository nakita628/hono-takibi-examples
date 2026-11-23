import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getApiKeysKey() {
  return ['api_keys'] as const
}

export function getAuthenticationKey() {
  return ['authentication'] as const
}

export function getBlocklistKey() {
  return ['blocklist'] as const
}

export function getCardIssuersKey() {
  return ['card_issuers'] as const
}

export function getCustomersKey() {
  return ['customers'] as const
}

export function getDisputesKey() {
  return ['disputes'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getGsmKey() {
  return ['gsm'] as const
}

export function getMandatesKey() {
  return ['mandates'] as const
}

export function getOfferEngineKey() {
  return ['offer_engine'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getPaymentLinkKey() {
  return ['payment_link'] as const
}

export function getPaymentMethodsKey() {
  return ['payment_methods'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getPayoutsKey() {
  return ['payouts'] as const
}

export function getPollKey() {
  return ['poll'] as const
}

export function getProfileAcquirersKey() {
  return ['profile_acquirers'] as const
}

export function getRefundsKey() {
  return ['refunds'] as const
}

export function getRelayKey() {
  return ['relay'] as const
}

export function getRoutingKey() {
  return ['routing'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTelephoneOrderKey() {
  return ['telephone_order'] as const
}

export function getThreeDsDecisionKey() {
  return ['three_ds_decision'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getCustomerIdKey() {
  return ['{customer_id}'] as const
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

export function getGetPaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.payments)[':payment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payments', '/payments/:payment_id', keyArgs] as const
}

export function useGetPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>>
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
        ? getGetPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>>
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
        ? getGetPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdKey() {
  return ['payments', '/payments/:payment_id', 'POST'] as const
}

export function usePostPaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.payments)[':payment_id']['$post']> },
      ) => parseResponse(client.payments[':payment_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdConfirmKey() {
  return ['payments', '/payments/:payment_id/confirm', 'POST'] as const
}

export function usePostPaymentsPaymentIdConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payments)[':payment_id']['confirm']['$post']> },
      ) => parseResponse(client.payments[':payment_id'].confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdCaptureKey() {
  return ['payments', '/payments/:payment_id/capture', 'POST'] as const
}

export function usePostPaymentsPaymentIdCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['capture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payments)[':payment_id']['capture']['$post']> },
      ) => parseResponse(client.payments[':payment_id'].capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsSessionTokensKey() {
  return ['payments', '/payments/session_tokens', 'POST'] as const
}

export function usePostPaymentsSessionTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.session_tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payments.session_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsSessionTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payments.session_tokens.$post> },
      ) => parseResponse(client.payments.session_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdCancelKey() {
  return ['payments', '/payments/:payment_id/cancel', 'POST'] as const
}

export function usePostPaymentsPaymentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payments)[':payment_id']['cancel']['$post']> },
      ) => parseResponse(client.payments[':payment_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsPaymentIdCancelPostCaptureKey(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payments', '/payments/:payment_id/cancel_post_capture', keyArgs] as const
}

export function useGetPaymentsPaymentIdCancelPostCapture<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>
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
        ? getGetPaymentsPaymentIdCancelPostCaptureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payments[':payment_id'].cancel_post_capture.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsPaymentIdCancelPostCapture<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>
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
        ? getGetPaymentsPaymentIdCancelPostCaptureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payments[':payment_id'].cancel_post_capture.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdCancelPostCaptureKey() {
  return ['payments', '/payments/:payment_id/cancel_post_capture', 'POST'] as const
}

export function usePostPaymentsPaymentIdCancelPostCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdCancelPostCaptureKey()
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
            (typeof client.payments)[':payment_id']['cancel_post_capture']['$post']
          >
        },
      ) =>
        parseResponse(client.payments[':payment_id'].cancel_post_capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdExtendAuthorizationKey() {
  return ['payments', '/payments/:payment_id/extend_authorization', 'POST'] as const
}

export function usePostPaymentsPaymentIdExtendAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':payment_id']['extend_authorization']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['extend_authorization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdExtendAuthorizationKey()
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
            (typeof client.payments)[':payment_id']['extend_authorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payments[':payment_id'].extend_authorization.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsListKey(args: InferRequestType<typeof client.payments.list.$get>) {
  const { header: _, ...keyArgs } = args
  return ['payments', '/payments/list', keyArgs] as const
}

export function useGetPaymentsList<TError = unknown>(
  args: InferRequestType<typeof client.payments.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsList<TError = unknown>(
  args: InferRequestType<typeof client.payments.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdIncrementalAuthorizationKey() {
  return ['payments', '/payments/:payment_id/incremental_authorization', 'POST'] as const
}

export function usePostPaymentsPaymentIdIncrementalAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payments)[':payment_id']['incremental_authorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['incremental_authorization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdIncrementalAuthorizationKey()
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
            (typeof client.payments)[':payment_id']['incremental_authorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payments[':payment_id'].incremental_authorization.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentLinkPaymentLinkIdKey(
  args: InferRequestType<(typeof client.payment_link)[':payment_link_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_link', '/payment_link/:payment_link_id', keyArgs] as const
}

export function useGetPaymentLinkPaymentLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_link)[':payment_link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
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
        ? getGetPaymentLinkPaymentLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_link[':payment_link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentLinkPaymentLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_link)[':payment_link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
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
        ? getGetPaymentLinkPaymentLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_link[':payment_link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentLinkListKey() {
  return ['payment_link', '/payment_link/list', 'POST'] as const
}

export function usePostPaymentLinkList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_link.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_link.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentLinkListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_link.list.$post> }) =>
        parseResponse(client.payment_link.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentLinkProfileListKey() {
  return ['payment_link', '/payment_link/profile/list', 'POST'] as const
}

export function usePostPaymentLinkProfileList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_link.profile.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_link.profile.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentLinkProfileListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.payment_link.profile.list.$post> },
      ) => parseResponse(client.payment_link.profile.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentId3dsAuthenticationKey() {
  return ['payments', '/payments/:payment_id/3ds/authentication', 'POST'] as const
}

export function usePostPaymentsPaymentId3dsAuthentication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':payment_id']['3ds']['authentication']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['3ds']['authentication']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentId3dsAuthenticationKey()
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
            (typeof client.payments)[':payment_id']['3ds']['authentication']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payments[':payment_id']['3ds'].authentication.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdCompleteAuthorizeKey() {
  return ['payments', '/payments/:payment_id/complete_authorize', 'POST'] as const
}

export function usePostPaymentsPaymentIdCompleteAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':payment_id']['complete_authorize']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['complete_authorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdCompleteAuthorizeKey()
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
            (typeof client.payments)[':payment_id']['complete_authorize']['$post']
          >
        },
      ) =>
        parseResponse(client.payments[':payment_id'].complete_authorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdPostSessionTokensKey() {
  return ['payments', '/payments/:payment_id/post_session_tokens', 'POST'] as const
}

export function usePostPaymentsPaymentIdPostSessionTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':payment_id']['post_session_tokens']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['post_session_tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdPostSessionTokensKey()
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
            (typeof client.payments)[':payment_id']['post_session_tokens']['$post']
          >
        },
      ) =>
        parseResponse(client.payments[':payment_id'].post_session_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdUpdateMetadataKey() {
  return ['payments', '/payments/:payment_id/update_metadata', 'POST'] as const
}

export function usePostPaymentsPaymentIdUpdateMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdUpdateMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>
        },
      ) => parseResponse(client.payments[':payment_id'].update_metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdEligibilityCheckKey() {
  return ['payments', '/payments/:payment_id/eligibility_check', 'POST'] as const
}

export function usePostPaymentsPaymentIdEligibilityCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdEligibilityCheckKey()
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
            (typeof client.payments)[':payment_id']['eligibility_check']['$post']
          >
        },
      ) =>
        parseResponse(client.payments[':payment_id'].eligibility_check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentsPaymentIdEligibilityKey() {
  return ['payments', '/payments/:payment_id/eligibility', 'POST'] as const
}

export function usePostPaymentsPaymentIdEligibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['eligibility']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payments)[':payment_id']['eligibility']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentsPaymentIdEligibilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.payments)[':payment_id']['eligibility']['$post']>
        },
      ) => parseResponse(client.payments[':payment_id'].eligibility.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRelayKey() {
  return ['relay', '/relay', 'POST'] as const
}

export function usePostRelay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relay.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.relay.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRelayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.relay.$post> }) =>
        parseResponse(client.relay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRelayRelayIdKey(
  args: InferRequestType<(typeof client.relay)[':relay_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['relay', '/relay/:relay_id', keyArgs] as const
}

export function useGetRelayRelayId<TError = unknown>(
  args: InferRequestType<(typeof client.relay)[':relay_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRelayRelayIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relay[':relay_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRelayRelayId<TError = unknown>(
  args: InferRequestType<(typeof client.relay)[':relay_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRelayRelayIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.relay[':relay_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRefundsKey() {
  return ['refunds', '/refunds', 'POST'] as const
}

export function usePostRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refunds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.refunds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.refunds.$post> }) =>
        parseResponse(client.refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRefundsRefundIdKey(
  args: InferRequestType<(typeof client.refunds)[':refund_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['refunds', '/refunds/:refund_id', keyArgs] as const
}

export function useGetRefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.refunds)[':refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>>
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
        ? getGetRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.refunds[':refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.refunds)[':refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>>
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
        ? getGetRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.refunds[':refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRefundsRefundIdKey() {
  return ['refunds', '/refunds/:refund_id', 'POST'] as const
}

export function usePostRefundsRefundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.refunds)[':refund_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefundsRefundIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.refunds)[':refund_id']['$post']> },
      ) => parseResponse(client.refunds[':refund_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRefundsListKey() {
  return ['refunds', '/refunds/list', 'POST'] as const
}

export function usePostRefundsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refunds.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.refunds.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefundsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.refunds.list.$post> }) =>
        parseResponse(client.refunds.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationKey() {
  return ['organization', '/organization', 'POST'] as const
}

export function usePostOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organization.$post> }) =>
        parseResponse(client.organization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationIdKey(
  args: InferRequestType<(typeof client.organization)[':id']['$get']>,
) {
  return ['organization', '/organization/:id', args] as const
}

export function useGetOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organization)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrganizationIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organization)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrganizationIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationIdKey() {
  return ['organization', '/organization/:id', 'PUT'] as const
}

export function usePutOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organization)[':id']['$put']> },
      ) => parseResponse(client.organization[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function usePostAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$post> }) =>
        parseResponse(client.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  return ['accounts', '/accounts/:account_id', args] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdKey() {
  return ['accounts', '/accounts/:account_id', 'POST'] as const
}

export function usePostAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['$post']> },
      ) => parseResponse(client.accounts[':account_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdKey() {
  return ['accounts', '/accounts/:account_id', 'DELETE'] as const
}

export function useDeleteAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['$delete']> },
      ) => parseResponse(client.accounts[':account_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAccountIdKvKey() {
  return ['accounts', '/accounts/:account_id/kv', 'POST'] as const
}

export function usePostAccountsAccountIdKv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['kv']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['kv']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdKvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['kv']['$post']> },
      ) => parseResponse(client.accounts[':account_id'].kv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountAccountIdConnectorsKey(
  args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$get']>,
) {
  return ['account', '/account/:account_id/connectors', args] as const
}

export function useGetAccountAccountIdConnectors<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
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
        ? getGetAccountAccountIdConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account[':account_id'].connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountAccountIdConnectors<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
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
        ? getGetAccountAccountIdConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account[':account_id'].connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountAccountIdConnectorsKey() {
  return ['account', '/account/:account_id/connectors', 'POST'] as const
}

export function usePostAccountAccountIdConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)[':account_id']['connectors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountAccountIdConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account)[':account_id']['connectors']['$post']> },
      ) => parseResponse(client.account[':account_id'].connectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountAccountIdConnectorsMerchantConnectorIdKey(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
  >,
) {
  return ['account', '/account/:account_id/connectors/:merchant_connector_id', args] as const
}

export function useGetAccountAccountIdConnectorsMerchantConnectorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
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
        ? getGetAccountAccountIdConnectorsMerchantConnectorIdKey(args)
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
                (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
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
          client.account[':account_id'].connectors[':merchant_connector_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountAccountIdConnectorsMerchantConnectorId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
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
        ? getGetAccountAccountIdConnectorsMerchantConnectorIdKey(args)
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
                (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
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
          client.account[':account_id'].connectors[':merchant_connector_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountAccountIdConnectorsMerchantConnectorIdKey() {
  return ['account', '/account/:account_id/connectors/:merchant_connector_id', 'POST'] as const
}

export function usePostAccountAccountIdConnectorsMerchantConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountAccountIdConnectorsMerchantConnectorIdKey()
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
            (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].connectors[':merchant_connector_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountAccountIdConnectorsMerchantConnectorIdKey() {
  return ['account', '/account/:account_id/connectors/:merchant_connector_id', 'DELETE'] as const
}

export function useDeleteAccountAccountIdConnectorsMerchantConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountAccountIdConnectorsMerchantConnectorIdKey()
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
            (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].connectors[':merchant_connector_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountAccountIdWebhooksMerchantConnectorIdKey() {
  return ['account', '/account/:account_id/webhooks/:merchant_connector_id', 'POST'] as const
}

export function usePostAccountAccountIdWebhooksMerchantConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountAccountIdWebhooksMerchantConnectorIdKey()
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
            (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].webhooks[':merchant_connector_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGsmKey() {
  return ['gsm', '/gsm', 'POST'] as const
}

export function usePostGsm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.gsm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGsmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gsm.$post> }) =>
        parseResponse(client.gsm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGsmGetKey() {
  return ['gsm', '/gsm/get', 'POST'] as const
}

export function usePostGsmGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.get.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.gsm.get.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGsmGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gsm.get.$post> }) =>
        parseResponse(client.gsm.get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGsmUpdateKey() {
  return ['gsm', '/gsm/update', 'POST'] as const
}

export function usePostGsmUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.update.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.gsm.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGsmUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gsm.update.$post> }) =>
        parseResponse(client.gsm.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGsmDeleteKey() {
  return ['gsm', '/gsm/delete', 'POST'] as const
}

export function usePostGsmDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.delete.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.gsm.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGsmDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gsm.delete.$post> }) =>
        parseResponse(client.gsm.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMandatesMandateIdKey(
  args: InferRequestType<(typeof client.mandates)[':mandate_id']['$get']>,
) {
  return ['mandates', '/mandates/:mandate_id', args] as const
}

export function useGetMandatesMandateId<TError = unknown>(
  args: InferRequestType<(typeof client.mandates)[':mandate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>>
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
        ? getGetMandatesMandateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mandates[':mandate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMandatesMandateId<TError = unknown>(
  args: InferRequestType<(typeof client.mandates)[':mandate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>>
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
        ? getGetMandatesMandateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mandates[':mandate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMandatesRevokeMandateIdKey() {
  return ['mandates', '/mandates/revoke/:mandate_id', 'POST'] as const
}

export function usePostMandatesRevokeMandateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mandates.revoke)[':mandate_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mandates.revoke)[':mandate_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMandatesRevokeMandateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mandates.revoke)[':mandate_id']['$post']> },
      ) => parseResponse(client.mandates.revoke[':mandate_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdMandatesKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['mandates']['$get']>,
) {
  return ['customers', '/customers/:customer_id/mandates', args] as const
}

export function useGetCustomersCustomerIdMandates<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['mandates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
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
        ? getGetCustomersCustomerIdMandatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer_id'].mandates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdMandates<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['mandates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
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
        ? getGetCustomersCustomerIdMandatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer_id'].mandates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function usePostCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.$post> }) =>
        parseResponse(client.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersCustomerIdKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
) {
  return ['customers', '/customers/:customer_id', args] as const
}

export function useGetCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
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
        ? getGetCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
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
        ? getGetCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersCustomerIdKey() {
  return ['customers', '/customers/:customer_id', 'POST'] as const
}

export function usePostCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':customer_id']['$post']> },
      ) => parseResponse(client.customers[':customer_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersCustomerIdKey() {
  return ['customers', '/customers/:customer_id', 'DELETE'] as const
}

export function useDeleteCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':customer_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':customer_id']['$delete']> },
      ) => parseResponse(client.customers[':customer_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersReferenceMerchantReferenceIdKey(
  args: InferRequestType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>,
) {
  return ['v1', '/v1/customers/reference/:merchant_reference_id', args] as const
}

export function useGetV1CustomersReferenceMerchantReferenceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>
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
        ? getGetV1CustomersReferenceMerchantReferenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.customers.reference[':merchant_reference_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersReferenceMerchantReferenceId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>
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
        ? getGetV1CustomersReferenceMerchantReferenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.customers.reference[':merchant_reference_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersListKey(args: InferRequestType<typeof client.customers.list.$get>) {
  return ['customers', '/customers/list', args] as const
}

export function useGetCustomersList<TError = unknown>(
  args: InferRequestType<typeof client.customers.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersList<TError = unknown>(
  args: InferRequestType<typeof client.customers.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentMethodsKey() {
  return ['payment_methods', '/payment_methods', 'POST'] as const
}

export function usePostPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_methods.$post>
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
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_methods.$post> }) =>
        parseResponse(client.payment_methods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountPaymentMethodsKey(
  args: InferRequestType<typeof client.account.payment_methods.$get>,
) {
  return ['account', '/account/payment_methods', args] as const
}

export function useGetAccountPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.account.payment_methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
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
        ? getGetAccountPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.account.payment_methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
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
        ? getGetAccountPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersCustomerIdPaymentMethodsKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>,
) {
  return ['customers', '/customers/:customer_id/payment_methods', args] as const
}

export function useGetCustomersCustomerIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>
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
        ? getGetCustomersCustomerIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer_id'].payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersCustomerIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>
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
        ? getGetCustomersCustomerIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':customer_id'].payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersPaymentMethodsKey(
  args: InferRequestType<typeof client.customers.payment_methods.$get>,
) {
  return ['customers', '/customers/payment_methods', args] as const
}

export function useGetCustomersPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.customers.payment_methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.payment_methods.$get>>>
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
        ? getGetCustomersPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.customers.payment_methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.payment_methods.$get>>>
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
        ? getGetCustomersPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.customers.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentsPaymentIdClientKey(
  args: InferRequestType<(typeof client.payments)[':payment_id']['client']['$get']>,
) {
  return ['payments', '/payments/:payment_id/client', args] as const
}

export function useGetPaymentsPaymentIdClient<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['client']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
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
        ? getGetPaymentsPaymentIdClientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':payment_id'].client.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsPaymentIdClient<TError = unknown>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['client']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
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
        ? getGetPaymentsPaymentIdClientKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payments[':payment_id'].client.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomerIdPaymentMethodsPaymentMethodIdDefaultKey() {
  return [
    ':customer_id',
    '/:customer_id/payment_methods/:payment_method_id/default',
    'POST',
  ] as const
}

export function usePostCustomerIdPaymentMethodsPaymentMethodIdDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomerIdPaymentMethodsPaymentMethodIdDefaultKey()
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
            (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':customer_id'].payment_methods[':payment_method_id'].default.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentMethodsMethodIdKey(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['$get']>,
) {
  return ['payment_methods', '/payment_methods/:method_id', args] as const
}

export function useGetPaymentMethodsMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
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
        ? getGetPaymentMethodsMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_methods[':method_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentMethodsMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
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
        ? getGetPaymentMethodsMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_methods[':method_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePaymentMethodsMethodIdKey() {
  return ['payment_methods', '/payment_methods/:method_id', 'DELETE'] as const
}

export function useDeletePaymentMethodsMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_methods)[':method_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentMethodsMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payment_methods)[':method_id']['$delete']> },
      ) => parseResponse(client.payment_methods[':method_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentMethodsMethodIdUpdateKey() {
  return ['payment_methods', '/payment_methods/:method_id/update', 'POST'] as const
}

export function usePostPaymentMethodsMethodIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_methods)[':method_id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentMethodsMethodIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.payment_methods)[':method_id']['update']['$post']>
        },
      ) => parseResponse(client.payment_methods[':method_id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountAccountIdBusinessProfileKey(
  args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$get']>,
) {
  return ['account', '/account/:account_id/business_profile', args] as const
}

export function useGetAccountAccountIdBusinessProfile<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>>
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
        ? getGetAccountAccountIdBusinessProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account[':account_id'].business_profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountAccountIdBusinessProfile<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>>
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
        ? getGetAccountAccountIdBusinessProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account[':account_id'].business_profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountAccountIdBusinessProfileKey() {
  return ['account', '/account/:account_id/business_profile', 'POST'] as const
}

export function usePostAccountAccountIdBusinessProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)[':account_id']['business_profile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountAccountIdBusinessProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$post']>
        },
      ) => parseResponse(client.account[':account_id'].business_profile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountAccountIdBusinessProfileProfileIdKey(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
  >,
) {
  return ['account', '/account/:account_id/business_profile/:profile_id', args] as const
}

export function useGetAccountAccountIdBusinessProfileProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
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
        ? getGetAccountAccountIdBusinessProfileProfileIdKey(args)
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
                (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
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
          client.account[':account_id'].business_profile[':profile_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountAccountIdBusinessProfileProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
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
        ? getGetAccountAccountIdBusinessProfileProfileIdKey(args)
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
                (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
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
          client.account[':account_id'].business_profile[':profile_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountAccountIdBusinessProfileProfileIdKey() {
  return ['account', '/account/:account_id/business_profile/:profile_id', 'POST'] as const
}

export function usePostAccountAccountIdBusinessProfileProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountAccountIdBusinessProfileProfileIdKey()
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
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].business_profile[':profile_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountAccountIdBusinessProfileProfileIdKey() {
  return ['account', '/account/:account_id/business_profile/:profile_id', 'DELETE'] as const
}

export function useDeleteAccountAccountIdBusinessProfileProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountAccountIdBusinessProfileProfileIdKey()
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
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].business_profile[':profile_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesDisputeIdKey(
  args: InferRequestType<(typeof client.disputes)[':dispute_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/:dispute_id', keyArgs] as const
}

export function useGetDisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>>
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
        ? getGetDisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>>
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
        ? getGetDisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDisputesListKey(args: InferRequestType<typeof client.disputes.list.$get>) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/list', keyArgs] as const
}

export function useGetDisputesList<TError = unknown>(
  args: InferRequestType<typeof client.disputes.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesList<TError = unknown>(
  args: InferRequestType<typeof client.disputes.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDisputesProfileListKey(
  args: InferRequestType<typeof client.disputes.profile.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/profile/list', keyArgs] as const
}

export function useGetDisputesProfileList<TError = unknown>(
  args: InferRequestType<typeof client.disputes.profile.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>
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
        ? getGetDisputesProfileListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.profile.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesProfileList<TError = unknown>(
  args: InferRequestType<typeof client.disputes.profile.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>
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
        ? getGetDisputesProfileListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.profile.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDisputesFilterKey(
  args: InferRequestType<typeof client.disputes.filter.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/filter', keyArgs] as const
}

export function useGetDisputesFilter<TError = unknown>(
  args: InferRequestType<typeof client.disputes.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesFilterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesFilter<TError = unknown>(
  args: InferRequestType<typeof client.disputes.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesFilterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDisputesProfileFilterKey(
  args: InferRequestType<typeof client.disputes.profile.filter.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/profile/filter', keyArgs] as const
}

export function useGetDisputesProfileFilter<TError = unknown>(
  args: InferRequestType<typeof client.disputes.profile.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
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
        ? getGetDisputesProfileFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.profile.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesProfileFilter<TError = unknown>(
  args: InferRequestType<typeof client.disputes.profile.filter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
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
        ? getGetDisputesProfileFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.profile.filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDisputesAcceptDisputeIdKey() {
  return ['disputes', '/disputes/accept/:dispute_id', 'POST'] as const
}

export function usePostDisputesAcceptDisputeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disputes.accept)[':dispute_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.disputes.accept)[':dispute_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisputesAcceptDisputeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.disputes.accept)[':dispute_id']['$post']> },
      ) => parseResponse(client.disputes.accept[':dispute_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDisputesEvidenceKey() {
  return ['disputes', '/disputes/evidence', 'PUT'] as const
}

export function usePutDisputesEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.disputes.evidence.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDisputesEvidenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disputes.evidence.$put> }) =>
        parseResponse(client.disputes.evidence.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisputesEvidenceKey() {
  return ['disputes', '/disputes/evidence', 'POST'] as const
}

export function usePostDisputesEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.disputes.evidence.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisputesEvidenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disputes.evidence.$post> }) =>
        parseResponse(client.disputes.evidence.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDisputesEvidenceKey() {
  return ['disputes', '/disputes/evidence', 'DELETE'] as const
}

export function useDeleteDisputesEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.disputes.evidence.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDisputesEvidenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disputes.evidence.$delete> }) =>
        parseResponse(client.disputes.evidence.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesEvidenceDisputeIdKey(
  args: InferRequestType<(typeof client.disputes.evidence)[':dispute_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/evidence/:dispute_id', keyArgs] as const
}

export function useGetDisputesEvidenceDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes.evidence)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
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
        ? getGetDisputesEvidenceDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.evidence[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesEvidenceDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes.evidence)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
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
        ? getGetDisputesEvidenceDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.evidence[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDisputesAggregateKey(
  args: InferRequestType<typeof client.disputes.aggregate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/aggregate', keyArgs] as const
}

export function useGetDisputesAggregate<TError = unknown>(
  args: InferRequestType<typeof client.disputes.aggregate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>>
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
        ? getGetDisputesAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesAggregate<TError = unknown>(
  args: InferRequestType<typeof client.disputes.aggregate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>>
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
        ? getGetDisputesAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDisputesProfileAggregateKey(
  args: InferRequestType<typeof client.disputes.profile.aggregate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/profile/aggregate', keyArgs] as const
}

export function useGetDisputesProfileAggregate<TError = unknown>(
  args: InferRequestType<typeof client.disputes.profile.aggregate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>>
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
        ? getGetDisputesProfileAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.profile.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesProfileAggregate<TError = unknown>(
  args: InferRequestType<typeof client.disputes.profile.aggregate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>>
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
        ? getGetDisputesProfileAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes.profile.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoutingKey(args: InferRequestType<typeof client.routing.$get>) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing', keyArgs] as const
}

export function useGetRouting<TError = unknown>(
  args: InferRequestType<typeof client.routing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.routing.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRouting<TError = unknown>(
  args: InferRequestType<typeof client.routing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.routing.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRoutingKey() {
  return ['routing', '/routing', 'POST'] as const
}

export function usePostRouting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.routing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.routing.$post> }) =>
        parseResponse(client.routing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoutingRoutingAlgorithmIdActivateKey() {
  return ['routing', '/routing/:routing_algorithm_id/activate', 'POST'] as const
}

export function usePostRoutingRoutingAlgorithmIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingRoutingAlgorithmIdActivateKey()
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
            (typeof client.routing)[':routing_algorithm_id']['activate']['$post']
          >
        },
      ) =>
        parseResponse(client.routing[':routing_algorithm_id'].activate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutingRoutingAlgorithmIdKey(
  args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/:routing_algorithm_id', keyArgs] as const
}

export function useGetRoutingRoutingAlgorithmId<TError = unknown>(
  args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
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
        ? getGetRoutingRoutingAlgorithmIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing[':routing_algorithm_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingRoutingAlgorithmId<TError = unknown>(
  args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
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
        ? getGetRoutingRoutingAlgorithmIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing[':routing_algorithm_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoutingDeactivateKey() {
  return ['routing', '/routing/deactivate', 'POST'] as const
}

export function usePostRoutingDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.deactivate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.routing.deactivate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingDeactivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.routing.deactivate.$post> }) =>
        parseResponse(client.routing.deactivate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutingDefaultKey(
  args: InferRequestType<typeof client.routing.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/default', keyArgs] as const
}

export function useGetRoutingDefault<TError = unknown>(
  args: InferRequestType<typeof client.routing.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingDefaultKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingDefault<TError = unknown>(
  args: InferRequestType<typeof client.routing.default.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingDefaultKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing.default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoutingDefaultKey() {
  return ['routing', '/routing/default', 'POST'] as const
}

export function usePostRoutingDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.routing.default.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.routing.default.$post> }) =>
        parseResponse(client.routing.default.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutingActiveKey(args: InferRequestType<typeof client.routing.active.$get>) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/active', keyArgs] as const
}

export function useGetRoutingActive<TError = unknown>(
  args: InferRequestType<typeof client.routing.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingActive<TError = unknown>(
  args: InferRequestType<typeof client.routing.active.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRoutingActiveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing.active.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoutingDefaultProfileKey(
  args: InferRequestType<typeof client.routing.default.profile.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/default/profile', keyArgs] as const
}

export function useGetRoutingDefaultProfile<TError = unknown>(
  args: InferRequestType<typeof client.routing.default.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
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
        ? getGetRoutingDefaultProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing.default.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutingDefaultProfile<TError = unknown>(
  args: InferRequestType<typeof client.routing.default.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
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
        ? getGetRoutingDefaultProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.routing.default.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoutingDefaultProfileProfileIdKey() {
  return ['routing', '/routing/default/profile/:profile_id', 'POST'] as const
}

export function usePostRoutingDefaultProfileProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routing.default.profile)[':profile_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routing.default.profile)[':profile_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutingDefaultProfileProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.routing.default.profile)[':profile_id']['$post']>
        },
      ) => parseResponse(client.routing.default.profile[':profile_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/success_based/toggle',
    'POST',
  ] as const
}

export function usePostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleKey()
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
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].business_profile[
            ':profile_id'
          ].dynamic_routing.success_based.toggle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/elimination/toggle',
    'POST',
  ] as const
}

export function usePostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleKey()
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
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].business_profile[
            ':profile_id'
          ].dynamic_routing.elimination.toggle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/success_based/create',
    'POST',
  ] as const
}

export function usePostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateKey()
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
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].business_profile[
            ':profile_id'
          ].dynamic_routing.success_based.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/elimination/create',
    'POST',
  ] as const
}

export function usePostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateKey()
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
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].business_profile[
            ':profile_id'
          ].dynamic_routing.elimination.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/contracts/toggle',
    'POST',
  ] as const
}

export function usePostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleKey()
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
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.account[':account_id'].business_profile[
            ':profile_id'
          ].dynamic_routing.contracts.toggle.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOfferEngineOffersListKey() {
  return ['offer_engine', '/offer_engine/offers/list', 'POST'] as const
}

export function usePostOfferEngineOffersList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offer_engine.offers.list.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.offer_engine.offers.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfferEngineOffersListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.offer_engine.offers.list.$post> },
      ) => parseResponse(client.offer_engine.offers.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlocklistKey(args: InferRequestType<typeof client.blocklist.$get>) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist', keyArgs] as const
}

export function useGetBlocklist<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklist<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBlocklistKey() {
  return ['blocklist', '/blocklist', 'POST'] as const
}

export function usePostBlocklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.blocklist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlocklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blocklist.$post> }) =>
        parseResponse(client.blocklist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBlocklistKey() {
  return ['blocklist', '/blocklist', 'DELETE'] as const
}

export function useDeleteBlocklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.blocklist.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBlocklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blocklist.$delete> }) =>
        parseResponse(client.blocklist.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBlocklistToggleKey() {
  return ['blocklist', '/blocklist/toggle', 'POST'] as const
}

export function usePostBlocklistToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.toggle.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.blocklist.toggle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlocklistToggleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blocklist.toggle.$post> }) =>
        parseResponse(client.blocklist.toggle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlocklistCountKey(
  args: InferRequestType<typeof client.blocklist.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/count', keyArgs] as const
}

export function useGetBlocklistCount<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklistCount<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocklistLookupKey(
  args: InferRequestType<typeof client.blocklist.lookup.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/lookup', keyArgs] as const
}

export function useGetBlocklistLookup<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>>
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
        ? getGetBlocklistLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklistLookup<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>>
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
        ? getGetBlocklistLookupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBlocklistBatchKey(
  args: InferRequestType<typeof client.blocklist.batch.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/batch', keyArgs] as const
}

export function useGetBlocklistBatch<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.batch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklistBatch<TError = unknown>(
  args: InferRequestType<typeof client.blocklist.batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.batch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBlocklistBatchKey() {
  return ['blocklist', '/blocklist/batch', 'POST'] as const
}

export function usePostBlocklistBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.blocklist.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlocklistBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blocklist.batch.$post> }) =>
        parseResponse(client.blocklist.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlocklistBatchJobIdKey(
  args: InferRequestType<(typeof client.blocklist.batch)[':job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/batch/:job_id', keyArgs] as const
}

export function useGetBlocklistBatchJobId<TError = unknown>(
  args: InferRequestType<(typeof client.blocklist.batch)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>
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
        ? getGetBlocklistBatchJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.batch[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklistBatchJobId<TError = unknown>(
  args: InferRequestType<(typeof client.blocklist.batch)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>
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
        ? getGetBlocklistBatchJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklist.batch[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBlocklistExportKey() {
  return ['blocklist', '/blocklist/export', 'POST'] as const
}

export function usePostBlocklistExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.export.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.blocklist.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlocklistExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blocklist.export.$post> }) =>
        parseResponse(client.blocklist.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBlocklistCloneKey() {
  return ['blocklist', '/blocklist/clone', 'POST'] as const
}

export function usePostBlocklistClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.clone.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.blocklist.clone.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlocklistCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blocklist.clone.$post> }) =>
        parseResponse(client.blocklist.clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutsCreateKey() {
  return ['payouts', '/payouts/create', 'POST'] as const
}

export function usePostPayoutsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payouts.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payouts.create.$post> }) =>
        parseResponse(client.payouts.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayoutsPayoutIdKey(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['$get']>,
) {
  return ['payouts', '/payouts/:payout_id', args] as const
}

export function useGetPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>>
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
        ? getGetPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payouts[':payout_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>>
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
        ? getGetPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payouts[':payout_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayoutsPayoutIdKey() {
  return ['payouts', '/payouts/:payout_id', 'POST'] as const
}

export function usePostPayoutsPayoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payouts)[':payout_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsPayoutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.payouts)[':payout_id']['$post']> },
      ) => parseResponse(client.payouts[':payout_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutsPayoutIdCancelKey() {
  return ['payouts', '/payouts/:payout_id/cancel', 'POST'] as const
}

export function usePostPayoutsPayoutIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payouts)[':payout_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payouts)[':payout_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsPayoutIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payouts)[':payout_id']['cancel']['$post']> },
      ) => parseResponse(client.payouts[':payout_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutsPayoutIdFulfillKey() {
  return ['payouts', '/payouts/:payout_id/fulfill', 'POST'] as const
}

export function usePostPayoutsPayoutIdFulfill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsPayoutIdFulfillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payouts)[':payout_id']['fulfill']['$post']> },
      ) => parseResponse(client.payouts[':payout_id'].fulfill.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayoutsListKey(args: InferRequestType<typeof client.payouts.list.$get>) {
  return ['payouts', '/payouts/list', args] as const
}

export function useGetPayoutsList<TError = unknown>(
  args: InferRequestType<typeof client.payouts.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayoutsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payouts.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayoutsList<TError = unknown>(
  args: InferRequestType<typeof client.payouts.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayoutsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payouts.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayoutsListKey() {
  return ['payouts', '/payouts/list', 'POST'] as const
}

export function usePostPayoutsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payouts.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payouts.list.$post> }) =>
        parseResponse(client.payouts.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutsPayoutIdConfirmKey() {
  return ['payouts', '/payouts/:payout_id/confirm', 'POST'] as const
}

export function usePostPayoutsPayoutIdConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payouts)[':payout_id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payouts)[':payout_id']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsPayoutIdConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payouts)[':payout_id']['confirm']['$post']> },
      ) => parseResponse(client.payouts[':payout_id'].confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutsFilterKey() {
  return ['payouts', '/payouts/filter', 'POST'] as const
}

export function usePostPayoutsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.filter.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payouts.filter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payouts.filter.$post> }) =>
        parseResponse(client.payouts.filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysMerchantIdKey() {
  return ['api_keys', '/api_keys/:merchant_id', 'POST'] as const
}

export function usePostApiKeysMerchantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':merchant_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysMerchantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_keys)[':merchant_id']['$post']> },
      ) => parseResponse(client.api_keys[':merchant_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysMerchantIdKeyIdKey(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>,
) {
  return ['api_keys', '/api_keys/:merchant_id/:key_id', args] as const
}

export function useGetApiKeysMerchantIdKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
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
        ? getGetApiKeysMerchantIdKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api_keys[':merchant_id'][':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysMerchantIdKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
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
        ? getGetApiKeysMerchantIdKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api_keys[':merchant_id'][':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiKeysMerchantIdKeyIdKey() {
  return ['api_keys', '/api_keys/:merchant_id/:key_id', 'POST'] as const
}

export function usePostApiKeysMerchantIdKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysMerchantIdKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']> },
      ) => parseResponse(client.api_keys[':merchant_id'][':key_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeysMerchantIdKeyIdKey() {
  return ['api_keys', '/api_keys/:merchant_id/:key_id', 'DELETE'] as const
}

export function useDeleteApiKeysMerchantIdKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeysMerchantIdKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>
        },
      ) => parseResponse(client.api_keys[':merchant_id'][':key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeysMerchantIdListKey(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id']['list']['$get']>,
) {
  return ['api_keys', '/api_keys/:merchant_id/list', args] as const
}

export function useGetApiKeysMerchantIdList<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
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
        ? getGetApiKeysMerchantIdListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':merchant_id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeysMerchantIdList<TError = unknown>(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
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
        ? getGetApiKeysMerchantIdListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_keys[':merchant_id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsMerchantIdKey() {
  return ['events', '/events/:merchant_id', 'POST'] as const
}

export function usePostEventsMerchantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':merchant_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':merchant_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsMerchantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':merchant_id']['$post']> },
      ) => parseResponse(client.events[':merchant_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsProfileListKey() {
  return ['events', '/events/profile/list', 'POST'] as const
}

export function usePostEventsProfileList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.profile.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.profile.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsProfileListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.profile.list.$post> }) =>
        parseResponse(client.events.profile.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsMerchantIdEventIdAttemptsKey(
  args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>,
) {
  return ['events', '/events/:merchant_id/:event_id/attempts', args] as const
}

export function useGetEventsMerchantIdEventIdAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>
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
        ? getGetEventsMerchantIdEventIdAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.events[':merchant_id'][':event_id'].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsMerchantIdEventIdAttempts<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>
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
        ? getGetEventsMerchantIdEventIdAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.events[':merchant_id'][':event_id'].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEventsMerchantIdEventIdRetryKey() {
  return ['events', '/events/:merchant_id/:event_id/retry', 'POST'] as const
}

export function usePostEventsMerchantIdEventIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsMerchantIdEventIdRetryKey()
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
            (typeof client.events)[':merchant_id'][':event_id']['retry']['$post']
          >
        },
      ) =>
        parseResponse(client.events[':merchant_id'][':event_id'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPollStatusPollIdKey(
  args: InferRequestType<(typeof client.poll.status)[':poll_id']['$get']>,
) {
  return ['poll', '/poll/status/:poll_id', args] as const
}

export function useGetPollStatusPollId<TError = unknown>(
  args: InferRequestType<(typeof client.poll.status)[':poll_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>>
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
        ? getGetPollStatusPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.poll.status[':poll_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPollStatusPollId<TError = unknown>(
  args: InferRequestType<(typeof client.poll.status)[':poll_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>>
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
        ? getGetPollStatusPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.poll.status[':poll_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProfileAcquirersKey() {
  return ['profile_acquirers', '/profile_acquirers', 'POST'] as const
}

export function usePostProfileAcquirers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile_acquirers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.profile_acquirers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileAcquirersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.profile_acquirers.$post> }) =>
        parseResponse(client.profile_acquirers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProfileAcquirersProfileIdProfileAcquirerIdKey() {
  return [
    'profile_acquirers',
    '/profile_acquirers/:profile_id/:profile_acquirer_id',
    'POST',
  ] as const
}

export function usePostProfileAcquirersProfileIdProfileAcquirerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProfileAcquirersProfileIdProfileAcquirerIdKey()
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
            (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.profile_acquirers[':profile_id'][':profile_acquirer_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostThreeDsDecisionExecuteKey() {
  return ['three_ds_decision', '/three_ds_decision/execute', 'POST'] as const
}

export function usePostThreeDsDecisionExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.three_ds_decision.execute.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.three_ds_decision.execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThreeDsDecisionExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.three_ds_decision.execute.$post> },
      ) => parseResponse(client.three_ds_decision.execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationKey() {
  return ['authentication', '/authentication', 'POST'] as const
}

export function usePostAuthentication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authentication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authentication.$post> }) =>
        parseResponse(client.authentication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationAuthenticationIdEligibilityKey() {
  return ['authentication', '/authentication/:authentication_id/eligibility', 'POST'] as const
}

export function usePostAuthenticationAuthenticationIdEligibility<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.authentication)[':authentication_id']['eligibility']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authentication)[':authentication_id']['eligibility']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAuthenticationIdEligibilityKey()
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
            (typeof client.authentication)[':authentication_id']['eligibility']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authentication[':authentication_id'].eligibility.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationAuthenticationIdAuthenticateKey() {
  return ['authentication', '/authentication/:authentication_id/authenticate', 'POST'] as const
}

export function usePostAuthenticationAuthenticationIdAuthenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authentication)[':authentication_id']['authenticate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authentication)[':authentication_id']['authenticate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAuthenticationIdAuthenticateKey()
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
            (typeof client.authentication)[':authentication_id']['authenticate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authentication[':authentication_id'].authenticate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationAuthenticationIdRedirectKey() {
  return ['authentication', '/authentication/:authentication_id/redirect', 'POST'] as const
}

export function usePostAuthenticationAuthenticationIdRedirect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.authentication)[':authentication_id']['redirect']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authentication)[':authentication_id']['redirect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAuthenticationIdRedirectKey()
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
            (typeof client.authentication)[':authentication_id']['redirect']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authentication[':authentication_id'].redirect.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationAuthenticationIdSyncKey() {
  return ['authentication', '/authentication/:authentication_id/sync', 'POST'] as const
}

export function usePostAuthenticationAuthenticationIdSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authentication)[':authentication_id']['sync']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.authentication)[':authentication_id']['sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAuthenticationIdSyncKey()
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
            (typeof client.authentication)[':authentication_id']['sync']['$post']
          >
        },
      ) =>
        parseResponse(client.authentication[':authentication_id'].sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationAuthenticationIdEnabledAuthnMethodsTokenKey() {
  return [
    'authentication',
    '/authentication/:authentication_id/enabled_authn_methods_token',
    'POST',
  ] as const
}

export function usePostAuthenticationAuthenticationIdEnabledAuthnMethodsToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAuthenticationIdEnabledAuthnMethodsTokenKey()
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
            (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authentication[':authentication_id'].enabled_authn_methods_token.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationAuthenticationIdEligibilityCheckKey(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
  >,
) {
  return ['authentication', '/authentication/:authentication_id/eligibility-check', args] as const
}

export function useGetAuthenticationAuthenticationIdEligibilityCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
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
        ? getGetAuthenticationAuthenticationIdEligibilityCheckKey(args)
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
                (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
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
          client.authentication[':authentication_id']['eligibility-check'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationAuthenticationIdEligibilityCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
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
        ? getGetAuthenticationAuthenticationIdEligibilityCheckKey(args)
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
                (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
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
          client.authentication[':authentication_id']['eligibility-check'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAuthenticationAuthenticationIdEligibilityCheckKey() {
  return ['authentication', '/authentication/:authentication_id/eligibility-check', 'POST'] as const
}

export function usePostAuthenticationAuthenticationIdEligibilityCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationAuthenticationIdEligibilityCheckKey()
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
            (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.authentication[':authentication_id']['eligibility-check'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUserCreatePlatformKey() {
  return ['user', '/user/create_platform', 'POST'] as const
}

export function usePostUserCreatePlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.create_platform.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.create_platform.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserCreatePlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.create_platform.$post> },
      ) => parseResponse(client.user.create_platform.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function usePostSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscriptions.$post> }) =>
        parseResponse(client.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsCreateKey() {
  return ['subscriptions', '/subscriptions/create', 'POST'] as const
}

export function usePostSubscriptionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscriptions.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.subscriptions.create.$post> },
      ) => parseResponse(client.subscriptions.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdConfirmKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/confirm', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdConfirmKey()
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
            (typeof client.subscriptions)[':subscription_id']['confirm']['$post']
          >
        },
      ) =>
        parseResponse(client.subscriptions[':subscription_id'].confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription_id', keyArgs] as const
}

export function useGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscription_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
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
        ? getGetSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':subscription_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsSubscriptionIdUpdateKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/update', 'PUT'] as const
}

export function usePutSubscriptionsSubscriptionIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsSubscriptionIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>
        },
      ) => parseResponse(client.subscriptions[':subscription_id'].update.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsItemsKey(
  args: InferRequestType<typeof client.subscriptions.items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/items', keyArgs] as const
}

export function useGetSubscriptionsItems<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>
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
        ? getGetSubscriptionsItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsItems<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>
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
        ? getGetSubscriptionsItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsEstimateKey(
  args: InferRequestType<typeof client.subscriptions.estimate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/estimate', keyArgs] as const
}

export function useGetSubscriptionsEstimate<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>
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
        ? getGetSubscriptionsEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsEstimate<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.estimate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>
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
        ? getGetSubscriptionsEstimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.estimate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdPauseKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/pause', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>
        },
      ) => parseResponse(client.subscriptions[':subscription_id'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdResumeKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/resume', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdResumeKey()
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
            (typeof client.subscriptions)[':subscription_id']['resume']['$post']
          >
        },
      ) => parseResponse(client.subscriptions[':subscription_id'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsSubscriptionIdCancelKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/cancel', 'POST'] as const
}

export function usePostSubscriptionsSubscriptionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsSubscriptionIdCancelKey()
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
            (typeof client.subscriptions)[':subscription_id']['cancel']['$post']
          >
        },
      ) => parseResponse(client.subscriptions[':subscription_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardIssuersKey() {
  return ['card_issuers', '/card_issuers'] as const
}

export function useGetCardIssuers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardIssuersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_issuers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardIssuers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardIssuersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.card_issuers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardIssuersKey() {
  return ['card_issuers', '/card_issuers', 'POST'] as const
}

export function usePostCardIssuers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.card_issuers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardIssuersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.card_issuers.$post> }) =>
        parseResponse(client.card_issuers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardIssuersIdKey() {
  return ['card_issuers', '/card_issuers/:id', 'PUT'] as const
}

export function usePutCardIssuersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.card_issuers)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.card_issuers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardIssuersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.card_issuers)[':id']['$put']> },
      ) => parseResponse(client.card_issuers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardIssuersIdKey() {
  return ['card_issuers', '/card_issuers/:id', 'DELETE'] as const
}

export function useDeleteCardIssuersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.card_issuers)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.card_issuers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardIssuersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.card_issuers)[':id']['$delete']> },
      ) => parseResponse(client.card_issuers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTelephoneOrderMerchantIdProviderKey() {
  return ['telephone_order', '/telephone_order/:merchant_id/:provider', 'POST'] as const
}

export function usePostTelephoneOrderMerchantIdProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTelephoneOrderMerchantIdProviderKey()
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
            (typeof client.telephone_order)[':merchant_id'][':provider']['$post']
          >
        },
      ) =>
        parseResponse(
          client.telephone_order[':merchant_id'][':provider'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
