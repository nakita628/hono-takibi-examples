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

export function createPostPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.payments.$post>,
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
    const mutationDefaults = getPostPaymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.payments)[':payment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payments', '/payments/:payment_id', keyArgs] as const
}

export function getPaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsPaymentIdQueryKey>
  >({
    queryKey: getPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments[':payment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payments)[':payment_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':payment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsPaymentIdQueryKey>
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
    return { ...getPaymentsPaymentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPaymentsPaymentIdMutationKey() {
  return ['payments', '/payments/:payment_id', 'POST'] as const
}

export function getPostPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments)[':payment_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':payment_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.payments)[':payment_id']['$post']>) {
      return parseResponse(client.payments[':payment_id'].$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':payment_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentsPaymentIdConfirmMutationKey() {
  return ['payments', '/payments/:payment_id/confirm', 'POST'] as const
}

export function getPostPaymentsPaymentIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':payment_id']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':payment_id']['confirm']['$post']>,
    ) {
      return parseResponse(client.payments[':payment_id'].confirm.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdConfirm<
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
                Awaited<ReturnType<(typeof client.payments)[':payment_id']['confirm']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['confirm']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdConfirmMutationOptions<
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

export function getPostPaymentsPaymentIdCaptureMutationKey() {
  return ['payments', '/payments/:payment_id/capture', 'POST'] as const
}

export function getPostPaymentsPaymentIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['capture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':payment_id']['capture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':payment_id']['capture']['$post']>,
    ) {
      return parseResponse(client.payments[':payment_id'].capture.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdCapture<
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
                Awaited<ReturnType<(typeof client.payments)[':payment_id']['capture']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['capture']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdCaptureMutationOptions<
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

export function getPostPaymentsSessionTokensMutationKey() {
  return ['payments', '/payments/session_tokens', 'POST'] as const
}

export function getPostPaymentsSessionTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.session_tokens.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.payments.session_tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsSessionTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.session_tokens.$post>) {
      return parseResponse(client.payments.session_tokens.$post(args, options))
    },
  })
}

export function createPostPaymentsSessionTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payments.session_tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payments.session_tokens.$post>,
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
    const mutationDefaults = getPostPaymentsSessionTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentsPaymentIdCancelMutationKey() {
  return ['payments', '/payments/:payment_id/cancel', 'POST'] as const
}

export function getPostPaymentsPaymentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':payment_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':payment_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.payments[':payment_id'].cancel.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':payment_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentsPaymentIdCancelPostCaptureQueryKey(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payments', '/payments/:payment_id/cancel_post_capture', keyArgs] as const
}

export function getPaymentsPaymentIdCancelPostCaptureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsPaymentIdCancelPostCaptureQueryKey>
  >({
    queryKey: getPaymentsPaymentIdCancelPostCaptureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments[':payment_id'].cancel_post_capture.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentsPaymentIdCancelPostCapture<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.payments)[':payment_id']['cancel_post_capture']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsPaymentIdCancelPostCaptureQueryKey>
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
      ...getPaymentsPaymentIdCancelPostCaptureQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPaymentsPaymentIdCancelPostCaptureMutationKey() {
  return ['payments', '/payments/:payment_id/cancel_post_capture', 'POST'] as const
}

export function getPostPaymentsPaymentIdCancelPostCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdCancelPostCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':payment_id']['cancel_post_capture']['$post']
      >,
    ) {
      return parseResponse(client.payments[':payment_id'].cancel_post_capture.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdCancelPostCapture<
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
                    (typeof client.payments)[':payment_id']['cancel_post_capture']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdCancelPostCaptureMutationOptions<
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

export function getPostPaymentsPaymentIdExtendAuthorizationMutationKey() {
  return ['payments', '/payments/:payment_id/extend_authorization', 'POST'] as const
}

export function getPostPaymentsPaymentIdExtendAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.payments)[':payment_id']['extend_authorization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdExtendAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':payment_id']['extend_authorization']['$post']
      >,
    ) {
      return parseResponse(client.payments[':payment_id'].extend_authorization.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdExtendAuthorization<
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
                    (typeof client.payments)[':payment_id']['extend_authorization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.payments)[':payment_id']['extend_authorization']['$post']
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
    const mutationDefaults = getPostPaymentsPaymentIdExtendAuthorizationMutationOptions<
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

export function getPaymentsListQueryKey(args: InferRequestType<typeof client.payments.list.$get>) {
  const { header: _, ...keyArgs } = args
  return ['payments', '/payments/list', keyArgs] as const
}

export function getPaymentsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payments.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsListQueryKey>
  >({
    queryKey: getPaymentsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payments.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.list.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsListQueryKey>
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
    return { ...getPaymentsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPaymentsPaymentIdIncrementalAuthorizationMutationKey() {
  return ['payments', '/payments/:payment_id/incremental_authorization', 'POST'] as const
}

export function getPostPaymentsPaymentIdIncrementalAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.payments)[':payment_id']['incremental_authorization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdIncrementalAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':payment_id']['incremental_authorization']['$post']
      >,
    ) {
      return parseResponse(
        client.payments[':payment_id'].incremental_authorization.$post(args, options),
      )
    },
  })
}

export function createPostPaymentsPaymentIdIncrementalAuthorization<
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
                    (typeof client.payments)[':payment_id']['incremental_authorization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.payments)[':payment_id']['incremental_authorization']['$post']
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
    const mutationDefaults = getPostPaymentsPaymentIdIncrementalAuthorizationMutationOptions<
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

export function getPaymentLinkPaymentLinkIdQueryKey(
  args: InferRequestType<(typeof client.payment_link)[':payment_link_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment_link', '/payment_link/:payment_link_id', keyArgs] as const
}

export function getPaymentLinkPaymentLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_link)[':payment_link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentLinkPaymentLinkIdQueryKey>
  >({
    queryKey: getPaymentLinkPaymentLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_link[':payment_link_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentLinkPaymentLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payment_link)[':payment_link_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_link)[':payment_link_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentLinkPaymentLinkIdQueryKey>
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
      ...getPaymentLinkPaymentLinkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPaymentLinkListMutationKey() {
  return ['payment_link', '/payment_link/list', 'POST'] as const
}

export function getPostPaymentLinkListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_link.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payment_link.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentLinkListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_link.list.$post>) {
      return parseResponse(client.payment_link.list.$post(args, options))
    },
  })
}

export function createPostPaymentLinkList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_link.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_link.list.$post>,
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
    const mutationDefaults = getPostPaymentLinkListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentLinkProfileListMutationKey() {
  return ['payment_link', '/payment_link/profile/list', 'POST'] as const
}

export function getPostPaymentLinkProfileListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_link.profile.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.payment_link.profile.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentLinkProfileListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_link.profile.list.$post>) {
      return parseResponse(client.payment_link.profile.list.$post(args, options))
    },
  })
}

export function createPostPaymentLinkProfileList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.payment_link.profile.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.payment_link.profile.list.$post>,
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
    const mutationDefaults = getPostPaymentLinkProfileListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentsPaymentId3dsAuthenticationMutationKey() {
  return ['payments', '/payments/:payment_id/3ds/authentication', 'POST'] as const
}

export function getPostPaymentsPaymentId3dsAuthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.payments)[':payment_id']['3ds']['authentication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentId3dsAuthenticationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':payment_id']['3ds']['authentication']['$post']
      >,
    ) {
      return parseResponse(
        client.payments[':payment_id']['3ds'].authentication.$post(args, options),
      )
    },
  })
}

export function createPostPaymentsPaymentId3dsAuthentication<
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
                    (typeof client.payments)[':payment_id']['3ds']['authentication']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.payments)[':payment_id']['3ds']['authentication']['$post']
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
    const mutationDefaults = getPostPaymentsPaymentId3dsAuthenticationMutationOptions<
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

export function getPostPaymentsPaymentIdCompleteAuthorizeMutationKey() {
  return ['payments', '/payments/:payment_id/complete_authorize', 'POST'] as const
}

export function getPostPaymentsPaymentIdCompleteAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.payments)[':payment_id']['complete_authorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdCompleteAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':payment_id']['complete_authorize']['$post']
      >,
    ) {
      return parseResponse(client.payments[':payment_id'].complete_authorize.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdCompleteAuthorize<
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
                  ReturnType<(typeof client.payments)[':payment_id']['complete_authorize']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['complete_authorize']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdCompleteAuthorizeMutationOptions<
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

export function getPostPaymentsPaymentIdPostSessionTokensMutationKey() {
  return ['payments', '/payments/:payment_id/post_session_tokens', 'POST'] as const
}

export function getPostPaymentsPaymentIdPostSessionTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.payments)[':payment_id']['post_session_tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdPostSessionTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments)[':payment_id']['post_session_tokens']['$post']
      >,
    ) {
      return parseResponse(client.payments[':payment_id'].post_session_tokens.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdPostSessionTokens<
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
                    (typeof client.payments)[':payment_id']['post_session_tokens']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['post_session_tokens']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdPostSessionTokensMutationOptions<
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

export function getPostPaymentsPaymentIdUpdateMetadataMutationKey() {
  return ['payments', '/payments/:payment_id/update_metadata', 'POST'] as const
}

export function getPostPaymentsPaymentIdUpdateMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdUpdateMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>,
    ) {
      return parseResponse(client.payments[':payment_id'].update_metadata.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdUpdateMetadata<
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
                  ReturnType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdUpdateMetadataMutationOptions<
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

export function getPostPaymentsPaymentIdEligibilityCheckMutationKey() {
  return ['payments', '/payments/:payment_id/eligibility_check', 'POST'] as const
}

export function getPostPaymentsPaymentIdEligibilityCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdEligibilityCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>,
    ) {
      return parseResponse(client.payments[':payment_id'].eligibility_check.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdEligibilityCheck<
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
                  ReturnType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdEligibilityCheckMutationOptions<
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

export function getPostPaymentsPaymentIdEligibilityMutationKey() {
  return ['payments', '/payments/:payment_id/eligibility', 'POST'] as const
}

export function getPostPaymentsPaymentIdEligibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['eligibility']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':payment_id']['eligibility']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsPaymentIdEligibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':payment_id']['eligibility']['$post']>,
    ) {
      return parseResponse(client.payments[':payment_id'].eligibility.$post(args, options))
    },
  })
}

export function createPostPaymentsPaymentIdEligibility<
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
                Awaited<ReturnType<(typeof client.payments)[':payment_id']['eligibility']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payments)[':payment_id']['eligibility']['$post']>,
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
    const mutationDefaults = getPostPaymentsPaymentIdEligibilityMutationOptions<
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

export function getPostRelayMutationKey() {
  return ['relay', '/relay', 'POST'] as const
}

export function getPostRelayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relay.$post>>>>>,
    TError,
    InferRequestType<typeof client.relay.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRelayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.relay.$post>) {
      return parseResponse(client.relay.$post(args, options))
    },
  })
}

export function createPostRelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relay.$post>>>>>,
          TError,
          InferRequestType<typeof client.relay.$post>,
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
    const mutationDefaults = getPostRelayMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRelayRelayIdQueryKey(
  args: InferRequestType<(typeof client.relay)[':relay_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['relay', '/relay/:relay_id', keyArgs] as const
}

export function getRelayRelayIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.relay)[':relay_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelayRelayIdQueryKey>
  >({
    queryKey: getRelayRelayIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.relay[':relay_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRelayRelayId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.relay)[':relay_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.relay)[':relay_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRelayRelayIdQueryKey>
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
    return { ...getRelayRelayIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRefundsMutationKey() {
  return ['refunds', '/refunds', 'POST'] as const
}

export function getPostRefundsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refunds.$post>>>>>,
    TError,
    InferRequestType<typeof client.refunds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRefundsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.refunds.$post>) {
      return parseResponse(client.refunds.$post(args, options))
    },
  })
}

export function createPostRefunds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refunds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.refunds.$post>,
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
    const mutationDefaults = getPostRefundsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRefundsRefundIdQueryKey(
  args: InferRequestType<(typeof client.refunds)[':refund_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['refunds', '/refunds/:refund_id', keyArgs] as const
}

export function getRefundsRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.refunds)[':refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRefundsRefundIdQueryKey>
  >({
    queryKey: getRefundsRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.refunds[':refund_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.refunds)[':refund_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRefundsRefundIdQueryKey>
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
    return { ...getRefundsRefundIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRefundsRefundIdMutationKey() {
  return ['refunds', '/refunds/:refund_id', 'POST'] as const
}

export function getPostRefundsRefundIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.refunds)[':refund_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRefundsRefundIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.refunds)[':refund_id']['$post']>) {
      return parseResponse(client.refunds[':refund_id'].$post(args, options))
    },
  })
}

export function createPostRefundsRefundId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.refunds)[':refund_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.refunds)[':refund_id']['$post']>,
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
    const mutationDefaults = getPostRefundsRefundIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRefundsListMutationKey() {
  return ['refunds', '/refunds/list', 'POST'] as const
}

export function getPostRefundsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refunds.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.refunds.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRefundsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.refunds.list.$post>) {
      return parseResponse(client.refunds.list.$post(args, options))
    },
  })
}

export function createPostRefundsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refunds.list.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.refunds.list.$post>,
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
    const mutationDefaults = getPostRefundsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrganizationMutationKey() {
  return ['organization', '/organization', 'POST'] as const
}

export function getPostOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.$post>) {
      return parseResponse(client.organization.$post(args, options))
    },
  })
}

export function createPostOrganization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organization.$post>,
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
    const mutationDefaults = getPostOrganizationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.organization)[':id']['$get']>,
) {
  return ['organization', '/organization/:id', args] as const
}

export function getOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organization)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationIdQueryKey>
  >({
    queryKey: getOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organization)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationIdQueryKey>
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
    return { ...getOrganizationIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutOrganizationIdMutationKey() {
  return ['organization', '/organization/:id', 'PUT'] as const
}

export function getPutOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organization)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organization)[':id']['$put']>) {
      return parseResponse(client.organization[':id'].$put(args, options))
    },
  })
}

export function createPutOrganizationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.organization)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.organization)[':id']['$put']>,
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
    const mutationDefaults = getPutOrganizationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function createPostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
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
    const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  return ['accounts', '/accounts/:account_id', args] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
    return { ...getAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:account_id', 'POST'] as const
}

export function getPostAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':account_id']['$post']>) {
      return parseResponse(client.accounts[':account_id'].$post(args, options))
    },
  })
}

export function createPostAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:account_id', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':account_id']['$delete']>) {
      return parseResponse(client.accounts[':account_id'].$delete(args, options))
    },
  })
}

export function createDeleteAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountsAccountIdKvMutationKey() {
  return ['accounts', '/accounts/:account_id/kv', 'POST'] as const
}

export function getPostAccountsAccountIdKvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['kv']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['kv']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdKvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account_id']['kv']['$post']>,
    ) {
      return parseResponse(client.accounts[':account_id'].kv.$post(args, options))
    },
  })
}

export function createPostAccountsAccountIdKv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['kv']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['kv']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountIdKvMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountAccountIdConnectorsQueryKey(
  args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$get']>,
) {
  return ['account', '/account/:account_id/connectors', args] as const
}

export function getAccountAccountIdConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAccountIdConnectorsQueryKey>
  >({
    queryKey: getAccountAccountIdConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account[':account_id'].connectors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountAccountIdConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account)[':account_id']['connectors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountAccountIdConnectorsQueryKey>
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
      ...getAccountAccountIdConnectorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountAccountIdConnectorsMutationKey() {
  return ['account', '/account/:account_id/connectors', 'POST'] as const
}

export function getPostAccountAccountIdConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)[':account_id']['connectors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAccountIdConnectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$post']>,
    ) {
      return parseResponse(client.account[':account_id'].connectors.$post(args, options))
    },
  })
}

export function createPostAccountAccountIdConnectors<
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
                Awaited<ReturnType<(typeof client.account)[':account_id']['connectors']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)[':account_id']['connectors']['$post']>,
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
    const mutationDefaults = getPostAccountAccountIdConnectorsMutationOptions<
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

export function getAccountAccountIdConnectorsMerchantConnectorIdQueryKey(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
  >,
) {
  return ['account', '/account/:account_id/connectors/:merchant_connector_id', args] as const
}

export function getAccountAccountIdConnectorsMerchantConnectorIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountAccountIdConnectorsMerchantConnectorIdQueryKey>
  >({
    queryKey: getAccountAccountIdConnectorsMerchantConnectorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account[':account_id'].connectors[':merchant_connector_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountAccountIdConnectorsMerchantConnectorId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
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
                    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountAccountIdConnectorsMerchantConnectorIdQueryKey>
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
      ...getAccountAccountIdConnectorsMerchantConnectorIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountAccountIdConnectorsMerchantConnectorIdMutationKey() {
  return ['account', '/account/:account_id/connectors/:merchant_connector_id', 'POST'] as const
}

export function getPostAccountAccountIdConnectorsMerchantConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAccountIdConnectorsMerchantConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].connectors[':merchant_connector_id'].$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdConnectorsMerchantConnectorId<
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
                    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
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
    const mutationDefaults = getPostAccountAccountIdConnectorsMerchantConnectorIdMutationOptions<
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

export function getDeleteAccountAccountIdConnectorsMerchantConnectorIdMutationKey() {
  return ['account', '/account/:account_id/connectors/:merchant_connector_id', 'DELETE'] as const
}

export function getDeleteAccountAccountIdConnectorsMerchantConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountAccountIdConnectorsMerchantConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].connectors[':merchant_connector_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountAccountIdConnectorsMerchantConnectorId<
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
                    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
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
    const mutationDefaults = getDeleteAccountAccountIdConnectorsMerchantConnectorIdMutationOptions<
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

export function getPostAccountAccountIdWebhooksMerchantConnectorIdMutationKey() {
  return ['account', '/account/:account_id/webhooks/:merchant_connector_id', 'POST'] as const
}

export function getPostAccountAccountIdWebhooksMerchantConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAccountIdWebhooksMerchantConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].webhooks[':merchant_connector_id'].$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdWebhooksMerchantConnectorId<
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
                    (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
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
    const mutationDefaults = getPostAccountAccountIdWebhooksMerchantConnectorIdMutationOptions<
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

export function getPostGsmMutationKey() {
  return ['gsm', '/gsm', 'POST'] as const
}

export function getPostGsmMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.$post>>>>>,
    TError,
    InferRequestType<typeof client.gsm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGsmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gsm.$post>) {
      return parseResponse(client.gsm.$post(args, options))
    },
  })
}

export function createPostGsm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.$post>>>>>,
          TError,
          InferRequestType<typeof client.gsm.$post>,
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
    const mutationDefaults = getPostGsmMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGsmGetMutationKey() {
  return ['gsm', '/gsm/get', 'POST'] as const
}

export function getPostGsmGetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.get.$post>>>>>,
    TError,
    InferRequestType<typeof client.gsm.get.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGsmGetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gsm.get.$post>) {
      return parseResponse(client.gsm.get.$post(args, options))
    },
  })
}

export function createPostGsmGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.get.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.gsm.get.$post>,
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
    const mutationDefaults = getPostGsmGetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGsmUpdateMutationKey() {
  return ['gsm', '/gsm/update', 'POST'] as const
}

export function getPostGsmUpdateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.update.$post>>>>>,
    TError,
    InferRequestType<typeof client.gsm.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGsmUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gsm.update.$post>) {
      return parseResponse(client.gsm.update.$post(args, options))
    },
  })
}

export function createPostGsmUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.update.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.gsm.update.$post>,
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
    const mutationDefaults = getPostGsmUpdateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGsmDeleteMutationKey() {
  return ['gsm', '/gsm/delete', 'POST'] as const
}

export function getPostGsmDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.delete.$post>>>>>,
    TError,
    InferRequestType<typeof client.gsm.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGsmDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gsm.delete.$post>) {
      return parseResponse(client.gsm.delete.$post(args, options))
    },
  })
}

export function createPostGsmDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gsm.delete.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.gsm.delete.$post>,
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
    const mutationDefaults = getPostGsmDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMandatesMandateIdQueryKey(
  args: InferRequestType<(typeof client.mandates)[':mandate_id']['$get']>,
) {
  return ['mandates', '/mandates/:mandate_id', args] as const
}

export function getMandatesMandateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mandates)[':mandate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMandatesMandateIdQueryKey>
  >({
    queryKey: getMandatesMandateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mandates[':mandate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMandatesMandateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mandates)[':mandate_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mandates)[':mandate_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMandatesMandateIdQueryKey>
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
    return { ...getMandatesMandateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostMandatesRevokeMandateIdMutationKey() {
  return ['mandates', '/mandates/revoke/:mandate_id', 'POST'] as const
}

export function getPostMandatesRevokeMandateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mandates.revoke)[':mandate_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mandates.revoke)[':mandate_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMandatesRevokeMandateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mandates.revoke)[':mandate_id']['$post']>,
    ) {
      return parseResponse(client.mandates.revoke[':mandate_id'].$post(args, options))
    },
  })
}

export function createPostMandatesRevokeMandateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mandates.revoke)[':mandate_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mandates.revoke)[':mandate_id']['$post']>,
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
    const mutationDefaults = getPostMandatesRevokeMandateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersCustomerIdMandatesQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['mandates']['$get']>,
) {
  return ['customers', '/customers/:customer_id/mandates', args] as const
}

export function getCustomersCustomerIdMandatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['mandates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdMandatesQueryKey>
  >({
    queryKey: getCustomersCustomerIdMandatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].mandates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdMandates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customer_id']['mandates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customer_id']['mandates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdMandatesQueryKey>
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
      ...getCustomersCustomerIdMandatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCustomersMutationKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function getPostCustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    InferRequestType<typeof client.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customers.$post>) {
      return parseResponse(client.customers.$post(args, options))
    },
  })
}

export function createPostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
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
    const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
) {
  return ['customers', '/customers/:customer_id', args] as const
}

export function getCustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdQueryKey>
  >({
    queryKey: getCustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customer_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdQueryKey>
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
    return { ...getCustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCustomersCustomerIdMutationKey() {
  return ['customers', '/customers/:customer_id', 'POST'] as const
}

export function getPostCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customer_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customers)[':customer_id']['$post']>) {
      return parseResponse(client.customers[':customer_id'].$post(args, options))
    },
  })
}

export function createPostCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customer_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customer_id']['$post']>,
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
    const mutationDefaults = getPostCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCustomersCustomerIdMutationKey() {
  return ['customers', '/customers/:customer_id', 'DELETE'] as const
}

export function getDeleteCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':customer_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersCustomerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customers)[':customer_id']['$delete']>) {
      return parseResponse(client.customers[':customer_id'].$delete(args, options))
    },
  })
}

export function createDeleteCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':customer_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':customer_id']['$delete']>,
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
    const mutationDefaults = getDeleteCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomersReferenceMerchantReferenceIdQueryKey(
  args: InferRequestType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>,
) {
  return ['v1', '/v1/customers/reference/:merchant_reference_id', args] as const
}

export function getV1CustomersReferenceMerchantReferenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomersReferenceMerchantReferenceIdQueryKey>
  >({
    queryKey: getV1CustomersReferenceMerchantReferenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customers.reference[':merchant_reference_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomersReferenceMerchantReferenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.customers.reference)[':merchant_reference_id']['$get']
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
                    (typeof client.v1.customers.reference)[':merchant_reference_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CustomersReferenceMerchantReferenceIdQueryKey>
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
      ...getV1CustomersReferenceMerchantReferenceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCustomersListQueryKey(
  args: InferRequestType<typeof client.customers.list.$get>,
) {
  return ['customers', '/customers/list', args] as const
}

export function getCustomersListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.customers.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersListQueryKey>
  >({
    queryKey: getCustomersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomersList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customers.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.list.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersListQueryKey>
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
    return { ...getCustomersListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPaymentMethodsMutationKey() {
  return ['payment_methods', '/payment_methods', 'POST'] as const
}

export function getPostPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payment_methods.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_methods.$post>) {
      return parseResponse(client.payment_methods.$post(args, options))
    },
  })
}

export function createPostPaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_methods.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_methods.$post>,
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
    const mutationDefaults = getPostPaymentMethodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountPaymentMethodsQueryKey(
  args: InferRequestType<typeof client.account.payment_methods.$get>,
) {
  return ['account', '/account/payment_methods', args] as const
}

export function getAccountPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.payment_methods.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPaymentMethodsQueryKey>
  >({
    queryKey: getAccountPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.payment_methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.payment_methods.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.payment_methods.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountPaymentMethodsQueryKey>
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
      ...getAccountPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomersCustomerIdPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>,
) {
  return ['customers', '/customers/:customer_id/payment_methods', args] as const
}

export function getCustomersCustomerIdPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersCustomerIdPaymentMethodsQueryKey>
  >({
    queryKey: getCustomersCustomerIdPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':customer_id'].payment_methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersCustomerIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customers)[':customer_id']['payment_methods']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersCustomerIdPaymentMethodsQueryKey>
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
      ...getCustomersCustomerIdPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomersPaymentMethodsQueryKey(
  args: InferRequestType<typeof client.customers.payment_methods.$get>,
) {
  return ['customers', '/customers/payment_methods', args] as const
}

export function getCustomersPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customers.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.customers.payment_methods.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customers.payment_methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersPaymentMethodsQueryKey>
  >({
    queryKey: getCustomersPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.payment_methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customers.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customers.payment_methods.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.customers.payment_methods.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersPaymentMethodsQueryKey>
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
      ...getCustomersPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPaymentsPaymentIdClientQueryKey(
  args: InferRequestType<(typeof client.payments)[':payment_id']['client']['$get']>,
) {
  return ['payments', '/payments/:payment_id/client', args] as const
}

export function getPaymentsPaymentIdClientQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments)[':payment_id']['client']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsPaymentIdClientQueryKey>
  >({
    queryKey: getPaymentsPaymentIdClientQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments[':payment_id'].client.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentsPaymentIdClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payments)[':payment_id']['client']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments)[':payment_id']['client']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentsPaymentIdClientQueryKey>
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
      ...getPaymentsPaymentIdClientQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCustomerIdPaymentMethodsPaymentMethodIdDefaultMutationKey() {
  return [
    ':customer_id',
    '/:customer_id/payment_methods/:payment_method_id/default',
    'POST',
  ] as const
}

export function getPostCustomerIdPaymentMethodsPaymentMethodIdDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCustomerIdPaymentMethodsPaymentMethodIdDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
      >,
    ) {
      return parseResponse(
        client[':customer_id'].payment_methods[':payment_method_id'].default.$post(args, options),
      )
    },
  })
}

export function createPostCustomerIdPaymentMethodsPaymentMethodIdDefault<
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
                    (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
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
    const mutationDefaults = getPostCustomerIdPaymentMethodsPaymentMethodIdDefaultMutationOptions<
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

export function getPaymentMethodsMethodIdQueryKey(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['$get']>,
) {
  return ['payment_methods', '/payment_methods/:method_id', args] as const
}

export function getPaymentMethodsMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentMethodsMethodIdQueryKey>
  >({
    queryKey: getPaymentMethodsMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_methods[':method_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentMethodsMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payment_methods)[':method_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentMethodsMethodIdQueryKey>
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
      ...getPaymentMethodsMethodIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeletePaymentMethodsMethodIdMutationKey() {
  return ['payment_methods', '/payment_methods/:method_id', 'DELETE'] as const
}

export function getDeletePaymentMethodsMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payment_methods)[':method_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentMethodsMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment_methods)[':method_id']['$delete']>,
    ) {
      return parseResponse(client.payment_methods[':method_id'].$delete(args, options))
    },
  })
}

export function createDeletePaymentMethodsMethodId<
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
                Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payment_methods)[':method_id']['$delete']>,
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
    const mutationDefaults = getDeletePaymentMethodsMethodIdMutationOptions<
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

export function getPostPaymentMethodsMethodIdUpdateMutationKey() {
  return ['payment_methods', '/payment_methods/:method_id/update', 'POST'] as const
}

export function getPostPaymentMethodsMethodIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_methods)[':method_id']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payment_methods)[':method_id']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentMethodsMethodIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment_methods)[':method_id']['update']['$post']>,
    ) {
      return parseResponse(client.payment_methods[':method_id'].update.$post(args, options))
    },
  })
}

export function createPostPaymentMethodsMethodIdUpdate<
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
                  ReturnType<(typeof client.payment_methods)[':method_id']['update']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payment_methods)[':method_id']['update']['$post']>,
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
    const mutationDefaults = getPostPaymentMethodsMethodIdUpdateMutationOptions<
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

export function getAccountAccountIdBusinessProfileQueryKey(
  args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$get']>,
) {
  return ['account', '/account/:account_id/business_profile', args] as const
}

export function getAccountAccountIdBusinessProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAccountIdBusinessProfileQueryKey>
  >({
    queryKey: getAccountAccountIdBusinessProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account[':account_id'].business_profile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountAccountIdBusinessProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account)[':account_id']['business_profile']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account)[':account_id']['business_profile']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountAccountIdBusinessProfileQueryKey>
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
      ...getAccountAccountIdBusinessProfileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountAccountIdBusinessProfileMutationKey() {
  return ['account', '/account/:account_id/business_profile', 'POST'] as const
}

export function getPostAccountAccountIdBusinessProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':account_id']['business_profile']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)[':account_id']['business_profile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAccountIdBusinessProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$post']>,
    ) {
      return parseResponse(client.account[':account_id'].business_profile.$post(args, options))
    },
  })
}

export function createPostAccountAccountIdBusinessProfile<
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
                  ReturnType<(typeof client.account)[':account_id']['business_profile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)[':account_id']['business_profile']['$post']>,
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
    const mutationDefaults = getPostAccountAccountIdBusinessProfileMutationOptions<
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

export function getAccountAccountIdBusinessProfileProfileIdQueryKey(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
  >,
) {
  return ['account', '/account/:account_id/business_profile/:profile_id', args] as const
}

export function getAccountAccountIdBusinessProfileProfileIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountAccountIdBusinessProfileProfileIdQueryKey>
  >({
    queryKey: getAccountAccountIdBusinessProfileProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account[':account_id'].business_profile[':profile_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountAccountIdBusinessProfileProfileId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountAccountIdBusinessProfileProfileIdQueryKey>
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
      ...getAccountAccountIdBusinessProfileProfileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountAccountIdBusinessProfileProfileIdMutationKey() {
  return ['account', '/account/:account_id/business_profile/:profile_id', 'POST'] as const
}

export function getPostAccountAccountIdBusinessProfileProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAccountIdBusinessProfileProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].business_profile[':profile_id'].$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdBusinessProfileProfileId<
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
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
    const mutationDefaults = getPostAccountAccountIdBusinessProfileProfileIdMutationOptions<
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

export function getDeleteAccountAccountIdBusinessProfileProfileIdMutationKey() {
  return ['account', '/account/:account_id/business_profile/:profile_id', 'DELETE'] as const
}

export function getDeleteAccountAccountIdBusinessProfileProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountAccountIdBusinessProfileProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].business_profile[':profile_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountAccountIdBusinessProfileProfileId<
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
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
    const mutationDefaults = getDeleteAccountAccountIdBusinessProfileProfileIdMutationOptions<
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

export function getDisputesDisputeIdQueryKey(
  args: InferRequestType<(typeof client.disputes)[':dispute_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/:dispute_id', keyArgs] as const
}

export function getDisputesDisputeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disputes)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesDisputeIdQueryKey>
  >({
    queryKey: getDisputesDisputeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes[':dispute_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDisputesDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.disputes)[':dispute_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.disputes)[':dispute_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesDisputeIdQueryKey>
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
    return { ...getDisputesDisputeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDisputesListQueryKey(args: InferRequestType<typeof client.disputes.list.$get>) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/list', keyArgs] as const
}

export function getDisputesListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.disputes.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesListQueryKey>
  >({
    queryKey: getDisputesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisputesList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disputes.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.list.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesListQueryKey>
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
    return { ...getDisputesListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDisputesProfileListQueryKey(
  args: InferRequestType<typeof client.disputes.profile.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/profile/list', keyArgs] as const
}

export function getDisputesProfileListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.disputes.profile.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesProfileListQueryKey>
  >({
    queryKey: getDisputesProfileListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.profile.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisputesProfileList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disputes.profile.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.list.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesProfileListQueryKey>
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
    return { ...getDisputesProfileListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDisputesFilterQueryKey(
  args: InferRequestType<typeof client.disputes.filter.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/filter', keyArgs] as const
}

export function getDisputesFilterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.disputes.filter.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesFilterQueryKey>
  >({
    queryKey: getDisputesFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.filter.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisputesFilter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disputes.filter.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disputes.filter.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesFilterQueryKey>
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
    return { ...getDisputesFilterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDisputesProfileFilterQueryKey(
  args: InferRequestType<typeof client.disputes.profile.filter.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/profile/filter', keyArgs] as const
}

export function getDisputesProfileFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.disputes.profile.filter.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesProfileFilterQueryKey>
  >({
    queryKey: getDisputesProfileFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.profile.filter.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDisputesProfileFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disputes.profile.filter.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.filter.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesProfileFilterQueryKey>
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
      ...getDisputesProfileFilterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDisputesAcceptDisputeIdMutationKey() {
  return ['disputes', '/disputes/accept/:dispute_id', 'POST'] as const
}

export function getPostDisputesAcceptDisputeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disputes.accept)[':dispute_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.disputes.accept)[':dispute_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDisputesAcceptDisputeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.disputes.accept)[':dispute_id']['$post']>,
    ) {
      return parseResponse(client.disputes.accept[':dispute_id'].$post(args, options))
    },
  })
}

export function createPostDisputesAcceptDisputeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.disputes.accept)[':dispute_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.disputes.accept)[':dispute_id']['$post']>,
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
    const mutationDefaults = getPostDisputesAcceptDisputeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutDisputesEvidenceMutationKey() {
  return ['disputes', '/disputes/evidence', 'PUT'] as const
}

export function getPutDisputesEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.disputes.evidence.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDisputesEvidenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disputes.evidence.$put>) {
      return parseResponse(client.disputes.evidence.$put(args, options))
    },
  })
}

export function createPutDisputesEvidence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.disputes.evidence.$put>,
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
    const mutationDefaults = getPutDisputesEvidenceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDisputesEvidenceMutationKey() {
  return ['disputes', '/disputes/evidence', 'POST'] as const
}

export function getPostDisputesEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.disputes.evidence.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisputesEvidenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disputes.evidence.$post>) {
      return parseResponse(client.disputes.evidence.$post(args, options))
    },
  })
}

export function createPostDisputesEvidence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.disputes.evidence.$post>,
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
    const mutationDefaults = getPostDisputesEvidenceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteDisputesEvidenceMutationKey() {
  return ['disputes', '/disputes/evidence', 'DELETE'] as const
}

export function getDeleteDisputesEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.disputes.evidence.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDisputesEvidenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disputes.evidence.$delete>) {
      return parseResponse(client.disputes.evidence.$delete(args, options))
    },
  })
}

export function createDeleteDisputesEvidence<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disputes.evidence.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.disputes.evidence.$delete>,
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
    const mutationDefaults = getDeleteDisputesEvidenceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDisputesEvidenceDisputeIdQueryKey(
  args: InferRequestType<(typeof client.disputes.evidence)[':dispute_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/evidence/:dispute_id', keyArgs] as const
}

export function getDisputesEvidenceDisputeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.disputes.evidence)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesEvidenceDisputeIdQueryKey>
  >({
    queryKey: getDisputesEvidenceDisputeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.evidence[':dispute_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDisputesEvidenceDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.disputes.evidence)[':dispute_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.disputes.evidence)[':dispute_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesEvidenceDisputeIdQueryKey>
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
      ...getDisputesEvidenceDisputeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDisputesAggregateQueryKey(
  args: InferRequestType<typeof client.disputes.aggregate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/aggregate', keyArgs] as const
}

export function getDisputesAggregateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.disputes.aggregate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesAggregateQueryKey>
  >({
    queryKey: getDisputesAggregateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.aggregate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisputesAggregate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disputes.aggregate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.disputes.aggregate.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesAggregateQueryKey>
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
    return { ...getDisputesAggregateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDisputesProfileAggregateQueryKey(
  args: InferRequestType<typeof client.disputes.profile.aggregate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/profile/aggregate', keyArgs] as const
}

export function getDisputesProfileAggregateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.disputes.profile.aggregate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesProfileAggregateQueryKey>
  >({
    queryKey: getDisputesProfileAggregateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.profile.aggregate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDisputesProfileAggregate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disputes.profile.aggregate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.disputes.profile.aggregate.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesProfileAggregateQueryKey>
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
      ...getDisputesProfileAggregateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRoutingQueryKey(args: InferRequestType<typeof client.routing.$get>) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing', keyArgs] as const
}

export function getRoutingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.routing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRoutingQueryKey>
  >({
    queryKey: getRoutingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRouting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.routing.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRoutingQueryKey>
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
    return { ...getRoutingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRoutingMutationKey() {
  return ['routing', '/routing', 'POST'] as const
}

export function getPostRoutingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$post>>>>>,
    TError,
    InferRequestType<typeof client.routing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.routing.$post>) {
      return parseResponse(client.routing.$post(args, options))
    },
  })
}

export function createPostRouting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.routing.$post>,
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
    const mutationDefaults = getPostRoutingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRoutingRoutingAlgorithmIdActivateMutationKey() {
  return ['routing', '/routing/:routing_algorithm_id/activate', 'POST'] as const
}

export function getPostRoutingRoutingAlgorithmIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingRoutingAlgorithmIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>,
    ) {
      return parseResponse(client.routing[':routing_algorithm_id'].activate.$post(args, options))
    },
  })
}

export function createPostRoutingRoutingAlgorithmIdActivate<
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
                  ReturnType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>,
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
    const mutationDefaults = getPostRoutingRoutingAlgorithmIdActivateMutationOptions<
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

export function getRoutingRoutingAlgorithmIdQueryKey(
  args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/:routing_algorithm_id', keyArgs] as const
}

export function getRoutingRoutingAlgorithmIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingRoutingAlgorithmIdQueryKey>
  >({
    queryKey: getRoutingRoutingAlgorithmIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing[':routing_algorithm_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoutingRoutingAlgorithmId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.routing)[':routing_algorithm_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.routing)[':routing_algorithm_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoutingRoutingAlgorithmIdQueryKey>
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
      ...getRoutingRoutingAlgorithmIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRoutingDeactivateMutationKey() {
  return ['routing', '/routing/deactivate', 'POST'] as const
}

export function getPostRoutingDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.deactivate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.routing.deactivate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingDeactivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.routing.deactivate.$post>) {
      return parseResponse(client.routing.deactivate.$post(args, options))
    },
  })
}

export function createPostRoutingDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.routing.deactivate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.routing.deactivate.$post>,
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
    const mutationDefaults = getPostRoutingDeactivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoutingDefaultQueryKey(
  args: InferRequestType<typeof client.routing.default.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/default', keyArgs] as const
}

export function getRoutingDefaultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.routing.default.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingDefaultQueryKey>
  >({
    queryKey: getRoutingDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing.default.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoutingDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.routing.default.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoutingDefaultQueryKey>
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
    return { ...getRoutingDefaultQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRoutingDefaultMutationKey() {
  return ['routing', '/routing/default', 'POST'] as const
}

export function getPostRoutingDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.routing.default.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingDefaultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.routing.default.$post>) {
      return parseResponse(client.routing.default.$post(args, options))
    },
  })
}

export function createPostRoutingDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.routing.default.$post>,
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
    const mutationDefaults = getPostRoutingDefaultMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRoutingActiveQueryKey(
  args: InferRequestType<typeof client.routing.active.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/active', keyArgs] as const
}

export function getRoutingActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.routing.active.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingActiveQueryKey>
  >({
    queryKey: getRoutingActiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing.active.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoutingActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.routing.active.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.routing.active.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRoutingActiveQueryKey>
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
    return { ...getRoutingActiveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRoutingDefaultProfileQueryKey(
  args: InferRequestType<typeof client.routing.default.profile.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['routing', '/routing/default/profile', keyArgs] as const
}

export function getRoutingDefaultProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.routing.default.profile.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoutingDefaultProfileQueryKey>
  >({
    queryKey: getRoutingDefaultProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.routing.default.profile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRoutingDefaultProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.routing.default.profile.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.routing.default.profile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRoutingDefaultProfileQueryKey>
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
      ...getRoutingDefaultProfileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRoutingDefaultProfileProfileIdMutationKey() {
  return ['routing', '/routing/default/profile/:profile_id', 'POST'] as const
}

export function getPostRoutingDefaultProfileProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routing.default.profile)[':profile_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.routing.default.profile)[':profile_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoutingDefaultProfileProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.routing.default.profile)[':profile_id']['$post']>,
    ) {
      return parseResponse(client.routing.default.profile[':profile_id'].$post(args, options))
    },
  })
}

export function createPostRoutingDefaultProfileProfileId<
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
                Awaited<ReturnType<(typeof client.routing.default.profile)[':profile_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.routing.default.profile)[':profile_id']['$post']>,
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
    const mutationDefaults = getPostRoutingDefaultProfileProfileIdMutationOptions<
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

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleMutationKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/success_based/toggle',
    'POST',
  ] as const
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].business_profile[
          ':profile_id'
        ].dynamic_routing.success_based.toggle.$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggle<
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
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
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleMutationOptions<
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

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleMutationKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/elimination/toggle',
    'POST',
  ] as const
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].business_profile[
          ':profile_id'
        ].dynamic_routing.elimination.toggle.$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggle<
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
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
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleMutationOptions<
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

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateMutationKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/success_based/create',
    'POST',
  ] as const
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].business_profile[
          ':profile_id'
        ].dynamic_routing.success_based.create.$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreate<
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
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
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateMutationOptions<
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

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateMutationKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/elimination/create',
    'POST',
  ] as const
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].business_profile[
          ':profile_id'
        ].dynamic_routing.elimination.create.$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreate<
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
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
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateMutationOptions<
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

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleMutationKey() {
  return [
    'account',
    '/account/:account_id/business_profile/:profile_id/dynamic_routing/contracts/toggle',
    'POST',
  ] as const
}

export function getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
      >,
    ) {
      return parseResponse(
        client.account[':account_id'].business_profile[
          ':profile_id'
        ].dynamic_routing.contracts.toggle.$post(args, options),
      )
    },
  })
}

export function createPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggle<
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
                    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
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
      getPostAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleMutationOptions<
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

export function getPostOfferEngineOffersListMutationKey() {
  return ['offer_engine', '/offer_engine/offers/list', 'POST'] as const
}

export function getPostOfferEngineOffersListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offer_engine.offers.list.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.offer_engine.offers.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOfferEngineOffersListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.offer_engine.offers.list.$post>) {
      return parseResponse(client.offer_engine.offers.list.$post(args, options))
    },
  })
}

export function createPostOfferEngineOffersList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offer_engine.offers.list.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.offer_engine.offers.list.$post>,
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
    const mutationDefaults = getPostOfferEngineOffersListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlocklistQueryKey(args: InferRequestType<typeof client.blocklist.$get>) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist', keyArgs] as const
}

export function getBlocklistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blocklist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlocklistQueryKey>
  >({
    queryKey: getBlocklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blocklist.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistQueryKey>
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
    return { ...getBlocklistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBlocklistMutationKey() {
  return ['blocklist', '/blocklist', 'POST'] as const
}

export function getPostBlocklistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$post>>>>>,
    TError,
    InferRequestType<typeof client.blocklist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklist.$post>) {
      return parseResponse(client.blocklist.$post(args, options))
    },
  })
}

export function createPostBlocklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.blocklist.$post>,
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
    const mutationDefaults = getPostBlocklistMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBlocklistMutationKey() {
  return ['blocklist', '/blocklist', 'DELETE'] as const
}

export function getDeleteBlocklistMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$delete>>>>>,
    TError,
    InferRequestType<typeof client.blocklist.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlocklistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklist.$delete>) {
      return parseResponse(client.blocklist.$delete(args, options))
    },
  })
}

export function createDeleteBlocklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.blocklist.$delete>,
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
    const mutationDefaults = getDeleteBlocklistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBlocklistToggleMutationKey() {
  return ['blocklist', '/blocklist/toggle', 'POST'] as const
}

export function getPostBlocklistToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.toggle.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.blocklist.toggle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistToggleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklist.toggle.$post>) {
      return parseResponse(client.blocklist.toggle.$post(args, options))
    },
  })
}

export function createPostBlocklistToggle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.toggle.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.blocklist.toggle.$post>,
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
    const mutationDefaults = getPostBlocklistToggleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlocklistCountQueryKey(
  args: InferRequestType<typeof client.blocklist.count.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/count', keyArgs] as const
}

export function getBlocklistCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blocklist.count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistCountQueryKey>
  >({
    queryKey: getBlocklistCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklist.count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklistCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blocklist.count.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.count.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistCountQueryKey>
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
    return { ...getBlocklistCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBlocklistLookupQueryKey(
  args: InferRequestType<typeof client.blocklist.lookup.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/lookup', keyArgs] as const
}

export function getBlocklistLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blocklist.lookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistLookupQueryKey>
  >({
    queryKey: getBlocklistLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklist.lookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklistLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blocklist.lookup.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.lookup.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistLookupQueryKey>
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
    return { ...getBlocklistLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBlocklistBatchQueryKey(
  args: InferRequestType<typeof client.blocklist.batch.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/batch', keyArgs] as const
}

export function getBlocklistBatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blocklist.batch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistBatchQueryKey>
  >({
    queryKey: getBlocklistBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklist.batch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklistBatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blocklist.batch.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistBatchQueryKey>
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
    return { ...getBlocklistBatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBlocklistBatchMutationKey() {
  return ['blocklist', '/blocklist/batch', 'POST'] as const
}

export function getPostBlocklistBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.blocklist.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklist.batch.$post>) {
      return parseResponse(client.blocklist.batch.$post(args, options))
    },
  })
}

export function createPostBlocklistBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.blocklist.batch.$post>,
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
    const mutationDefaults = getPostBlocklistBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlocklistBatchJobIdQueryKey(
  args: InferRequestType<(typeof client.blocklist.batch)[':job_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklist', '/blocklist/batch/:job_id', keyArgs] as const
}

export function getBlocklistBatchJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocklist.batch)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistBatchJobIdQueryKey>
  >({
    queryKey: getBlocklistBatchJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklist.batch[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBlocklistBatchJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocklist.batch)[':job_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocklist.batch)[':job_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistBatchJobIdQueryKey>
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
    return { ...getBlocklistBatchJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBlocklistExportMutationKey() {
  return ['blocklist', '/blocklist/export', 'POST'] as const
}

export function getPostBlocklistExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.blocklist.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklist.export.$post>) {
      return parseResponse(client.blocklist.export.$post(args, options))
    },
  })
}

export function createPostBlocklistExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.blocklist.export.$post>,
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
    const mutationDefaults = getPostBlocklistExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBlocklistCloneMutationKey() {
  return ['blocklist', '/blocklist/clone', 'POST'] as const
}

export function getPostBlocklistCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.clone.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.blocklist.clone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistCloneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklist.clone.$post>) {
      return parseResponse(client.blocklist.clone.$post(args, options))
    },
  })
}

export function createPostBlocklistClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.blocklist.clone.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.blocklist.clone.$post>,
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
    const mutationDefaults = getPostBlocklistCloneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPayoutsCreateMutationKey() {
  return ['payouts', '/payouts/create', 'POST'] as const
}

export function getPostPayoutsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payouts.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payouts.create.$post>) {
      return parseResponse(client.payouts.create.$post(args, options))
    },
  })
}

export function createPostPayoutsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payouts.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payouts.create.$post>,
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
    const mutationDefaults = getPostPayoutsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPayoutsPayoutIdQueryKey(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['$get']>,
) {
  return ['payouts', '/payouts/:payout_id', args] as const
}

export function getPayoutsPayoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayoutsPayoutIdQueryKey>
  >({
    queryKey: getPayoutsPayoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payouts[':payout_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payouts)[':payout_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPayoutsPayoutIdQueryKey>
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
    return { ...getPayoutsPayoutIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPayoutsPayoutIdMutationKey() {
  return ['payouts', '/payouts/:payout_id', 'POST'] as const
}

export function getPostPayoutsPayoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.payouts)[':payout_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsPayoutIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.payouts)[':payout_id']['$post']>) {
      return parseResponse(client.payouts[':payout_id'].$post(args, options))
    },
  })
}

export function createPostPayoutsPayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payouts)[':payout_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payouts)[':payout_id']['$post']>,
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
    const mutationDefaults = getPostPayoutsPayoutIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPayoutsPayoutIdCancelMutationKey() {
  return ['payouts', '/payouts/:payout_id/cancel', 'POST'] as const
}

export function getPostPayoutsPayoutIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payouts)[':payout_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payouts)[':payout_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsPayoutIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payouts)[':payout_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.payouts[':payout_id'].cancel.$post(args, options))
    },
  })
}

export function createPostPayoutsPayoutIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payouts)[':payout_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payouts)[':payout_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostPayoutsPayoutIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPayoutsPayoutIdFulfillMutationKey() {
  return ['payouts', '/payouts/:payout_id/fulfill', 'POST'] as const
}

export function getPostPayoutsPayoutIdFulfillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsPayoutIdFulfillMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>,
    ) {
      return parseResponse(client.payouts[':payout_id'].fulfill.$post(args, options))
    },
  })
}

export function createPostPayoutsPayoutIdFulfill<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>,
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
    const mutationDefaults = getPostPayoutsPayoutIdFulfillMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPayoutsListQueryKey(args: InferRequestType<typeof client.payouts.list.$get>) {
  return ['payouts', '/payouts/list', args] as const
}

export function getPayoutsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payouts.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPayoutsListQueryKey>
  >({
    queryKey: getPayoutsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payouts.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPayoutsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payouts.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPayoutsListQueryKey>
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
    return { ...getPayoutsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPayoutsListMutationKey() {
  return ['payouts', '/payouts/list', 'POST'] as const
}

export function getPostPayoutsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payouts.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payouts.list.$post>) {
      return parseResponse(client.payouts.list.$post(args, options))
    },
  })
}

export function createPostPayoutsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.list.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.payouts.list.$post>,
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
    const mutationDefaults = getPostPayoutsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPayoutsPayoutIdConfirmMutationKey() {
  return ['payouts', '/payouts/:payout_id/confirm', 'POST'] as const
}

export function getPostPayoutsPayoutIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payouts)[':payout_id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payouts)[':payout_id']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsPayoutIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payouts)[':payout_id']['confirm']['$post']>,
    ) {
      return parseResponse(client.payouts[':payout_id'].confirm.$post(args, options))
    },
  })
}

export function createPostPayoutsPayoutIdConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payouts)[':payout_id']['confirm']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.payouts)[':payout_id']['confirm']['$post']>,
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
    const mutationDefaults = getPostPayoutsPayoutIdConfirmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPayoutsFilterMutationKey() {
  return ['payouts', '/payouts/filter', 'POST'] as const
}

export function getPostPayoutsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.filter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payouts.filter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payouts.filter.$post>) {
      return parseResponse(client.payouts.filter.$post(args, options))
    },
  })
}

export function createPostPayoutsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payouts.filter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payouts.filter.$post>,
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
    const mutationDefaults = getPostPayoutsFilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiKeysMerchantIdMutationKey() {
  return ['api_keys', '/api_keys/:merchant_id', 'POST'] as const
}

export function getPostApiKeysMerchantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':merchant_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMerchantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':merchant_id']['$post']>) {
      return parseResponse(client.api_keys[':merchant_id'].$post(args, options))
    },
  })
}

export function createPostApiKeysMerchantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':merchant_id']['$post']>,
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
    const mutationDefaults = getPostApiKeysMerchantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysMerchantIdKeyIdQueryKey(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>,
) {
  return ['api_keys', '/api_keys/:merchant_id/:key_id', args] as const
}

export function getApiKeysMerchantIdKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysMerchantIdKeyIdQueryKey>
  >({
    queryKey: getApiKeysMerchantIdKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys[':merchant_id'][':key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiKeysMerchantIdKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysMerchantIdKeyIdQueryKey>
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
      ...getApiKeysMerchantIdKeyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiKeysMerchantIdKeyIdMutationKey() {
  return ['api_keys', '/api_keys/:merchant_id/:key_id', 'POST'] as const
}

export function getPostApiKeysMerchantIdKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMerchantIdKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>,
    ) {
      return parseResponse(client.api_keys[':merchant_id'][':key_id'].$post(args, options))
    },
  })
}

export function createPostApiKeysMerchantIdKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>,
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
    const mutationDefaults = getPostApiKeysMerchantIdKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiKeysMerchantIdKeyIdMutationKey() {
  return ['api_keys', '/api_keys/:merchant_id/:key_id', 'DELETE'] as const
}

export function getDeleteApiKeysMerchantIdKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysMerchantIdKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>,
    ) {
      return parseResponse(client.api_keys[':merchant_id'][':key_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiKeysMerchantIdKeyId<
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
                Awaited<ReturnType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiKeysMerchantIdKeyIdMutationOptions<
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

export function getApiKeysMerchantIdListQueryKey(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id']['list']['$get']>,
) {
  return ['api_keys', '/api_keys/:merchant_id/list', args] as const
}

export function getApiKeysMerchantIdListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysMerchantIdListQueryKey>
  >({
    queryKey: getApiKeysMerchantIdListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys[':merchant_id'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiKeysMerchantIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api_keys)[':merchant_id']['list']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api_keys)[':merchant_id']['list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysMerchantIdListQueryKey>
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
      ...getApiKeysMerchantIdListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostEventsMerchantIdMutationKey() {
  return ['events', '/events/:merchant_id', 'POST'] as const
}

export function getPostEventsMerchantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':merchant_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':merchant_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMerchantIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':merchant_id']['$post']>) {
      return parseResponse(client.events[':merchant_id'].$post(args, options))
    },
  })
}

export function createPostEventsMerchantId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':merchant_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':merchant_id']['$post']>,
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
    const mutationDefaults = getPostEventsMerchantIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsProfileListMutationKey() {
  return ['events', '/events/profile/list', 'POST'] as const
}

export function getPostEventsProfileListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.profile.list.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.events.profile.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsProfileListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.profile.list.$post>) {
      return parseResponse(client.events.profile.list.$post(args, options))
    },
  })
}

export function createPostEventsProfileList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.profile.list.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.events.profile.list.$post>,
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
    const mutationDefaults = getPostEventsProfileListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsMerchantIdEventIdAttemptsQueryKey(
  args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>,
) {
  return ['events', '/events/:merchant_id/:event_id/attempts', args] as const
}

export function getEventsMerchantIdEventIdAttemptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsMerchantIdEventIdAttemptsQueryKey>
  >({
    queryKey: getEventsMerchantIdEventIdAttemptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':merchant_id'][':event_id'].attempts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsMerchantIdEventIdAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']
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
                    (typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsMerchantIdEventIdAttemptsQueryKey>
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
      ...getEventsMerchantIdEventIdAttemptsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostEventsMerchantIdEventIdRetryMutationKey() {
  return ['events', '/events/:merchant_id/:event_id/retry', 'POST'] as const
}

export function getPostEventsMerchantIdEventIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMerchantIdEventIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>,
    ) {
      return parseResponse(client.events[':merchant_id'][':event_id'].retry.$post(args, options))
    },
  })
}

export function createPostEventsMerchantIdEventIdRetry<
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
                  ReturnType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>,
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
    const mutationDefaults = getPostEventsMerchantIdEventIdRetryMutationOptions<
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

export function getPollStatusPollIdQueryKey(
  args: InferRequestType<(typeof client.poll.status)[':poll_id']['$get']>,
) {
  return ['poll', '/poll/status/:poll_id', args] as const
}

export function getPollStatusPollIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.poll.status)[':poll_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPollStatusPollIdQueryKey>
  >({
    queryKey: getPollStatusPollIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.poll.status[':poll_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPollStatusPollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.poll.status)[':poll_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.poll.status)[':poll_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPollStatusPollIdQueryKey>
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
    return { ...getPollStatusPollIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProfileAcquirersMutationKey() {
  return ['profile_acquirers', '/profile_acquirers', 'POST'] as const
}

export function getPostProfileAcquirersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile_acquirers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.profile_acquirers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileAcquirersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profile_acquirers.$post>) {
      return parseResponse(client.profile_acquirers.$post(args, options))
    },
  })
}

export function createPostProfileAcquirers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.profile_acquirers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.profile_acquirers.$post>,
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
    const mutationDefaults = getPostProfileAcquirersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostProfileAcquirersProfileIdProfileAcquirerIdMutationKey() {
  return [
    'profile_acquirers',
    '/profile_acquirers/:profile_id/:profile_acquirer_id',
    'POST',
  ] as const
}

export function getPostProfileAcquirersProfileIdProfileAcquirerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProfileAcquirersProfileIdProfileAcquirerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
      >,
    ) {
      return parseResponse(
        client.profile_acquirers[':profile_id'][':profile_acquirer_id'].$post(args, options),
      )
    },
  })
}

export function createPostProfileAcquirersProfileIdProfileAcquirerId<
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
                    (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
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
    const mutationDefaults = getPostProfileAcquirersProfileIdProfileAcquirerIdMutationOptions<
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

export function getPostThreeDsDecisionExecuteMutationKey() {
  return ['three_ds_decision', '/three_ds_decision/execute', 'POST'] as const
}

export function getPostThreeDsDecisionExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.three_ds_decision.execute.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.three_ds_decision.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostThreeDsDecisionExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.three_ds_decision.execute.$post>) {
      return parseResponse(client.three_ds_decision.execute.$post(args, options))
    },
  })
}

export function createPostThreeDsDecisionExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.three_ds_decision.execute.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.three_ds_decision.execute.$post>,
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
    const mutationDefaults = getPostThreeDsDecisionExecuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthenticationMutationKey() {
  return ['authentication', '/authentication', 'POST'] as const
}

export function getPostAuthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authentication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authentication.$post>) {
      return parseResponse(client.authentication.$post(args, options))
    },
  })
}

export function createPostAuthentication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authentication.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authentication.$post>,
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
    const mutationDefaults = getPostAuthenticationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthenticationAuthenticationIdEligibilityMutationKey() {
  return ['authentication', '/authentication/:authentication_id/eligibility', 'POST'] as const
}

export function getPostAuthenticationAuthenticationIdEligibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.authentication)[':authentication_id']['eligibility']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthenticationIdEligibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authentication)[':authentication_id']['eligibility']['$post']
      >,
    ) {
      return parseResponse(
        client.authentication[':authentication_id'].eligibility.$post(args, options),
      )
    },
  })
}

export function createPostAuthenticationAuthenticationIdEligibility<
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
                    (typeof client.authentication)[':authentication_id']['eligibility']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.authentication)[':authentication_id']['eligibility']['$post']
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
    const mutationDefaults = getPostAuthenticationAuthenticationIdEligibilityMutationOptions<
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

export function getPostAuthenticationAuthenticationIdAuthenticateMutationKey() {
  return ['authentication', '/authentication/:authentication_id/authenticate', 'POST'] as const
}

export function getPostAuthenticationAuthenticationIdAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.authentication)[':authentication_id']['authenticate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthenticationIdAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authentication)[':authentication_id']['authenticate']['$post']
      >,
    ) {
      return parseResponse(
        client.authentication[':authentication_id'].authenticate.$post(args, options),
      )
    },
  })
}

export function createPostAuthenticationAuthenticationIdAuthenticate<
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
                    (typeof client.authentication)[':authentication_id']['authenticate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.authentication)[':authentication_id']['authenticate']['$post']
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
    const mutationDefaults = getPostAuthenticationAuthenticationIdAuthenticateMutationOptions<
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

export function getPostAuthenticationAuthenticationIdRedirectMutationKey() {
  return ['authentication', '/authentication/:authentication_id/redirect', 'POST'] as const
}

export function getPostAuthenticationAuthenticationIdRedirectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.authentication)[':authentication_id']['redirect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthenticationIdRedirectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authentication)[':authentication_id']['redirect']['$post']
      >,
    ) {
      return parseResponse(
        client.authentication[':authentication_id'].redirect.$post(args, options),
      )
    },
  })
}

export function createPostAuthenticationAuthenticationIdRedirect<
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
                    (typeof client.authentication)[':authentication_id']['redirect']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.authentication)[':authentication_id']['redirect']['$post']
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
    const mutationDefaults = getPostAuthenticationAuthenticationIdRedirectMutationOptions<
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

export function getPostAuthenticationAuthenticationIdSyncMutationKey() {
  return ['authentication', '/authentication/:authentication_id/sync', 'POST'] as const
}

export function getPostAuthenticationAuthenticationIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authentication)[':authentication_id']['sync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authentication)[':authentication_id']['sync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthenticationIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.authentication)[':authentication_id']['sync']['$post']>,
    ) {
      return parseResponse(client.authentication[':authentication_id'].sync.$post(args, options))
    },
  })
}

export function createPostAuthenticationAuthenticationIdSync<
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
                  ReturnType<(typeof client.authentication)[':authentication_id']['sync']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.authentication)[':authentication_id']['sync']['$post']>,
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
    const mutationDefaults = getPostAuthenticationAuthenticationIdSyncMutationOptions<
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

export function getPostAuthenticationAuthenticationIdEnabledAuthnMethodsTokenMutationKey() {
  return [
    'authentication',
    '/authentication/:authentication_id/enabled_authn_methods_token',
    'POST',
  ] as const
}

export function getPostAuthenticationAuthenticationIdEnabledAuthnMethodsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthenticationIdEnabledAuthnMethodsTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
      >,
    ) {
      return parseResponse(
        client.authentication[':authentication_id'].enabled_authn_methods_token.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostAuthenticationAuthenticationIdEnabledAuthnMethodsToken<
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
                    (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
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
      getPostAuthenticationAuthenticationIdEnabledAuthnMethodsTokenMutationOptions<
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

export function getAuthenticationAuthenticationIdEligibilityCheckQueryKey(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
  >,
) {
  return ['authentication', '/authentication/:authentication_id/eligibility-check', args] as const
}

export function getAuthenticationAuthenticationIdEligibilityCheckQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAuthenticationAuthenticationIdEligibilityCheckQueryKey>
  >({
    queryKey: getAuthenticationAuthenticationIdEligibilityCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authentication[':authentication_id']['eligibility-check'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthenticationAuthenticationIdEligibilityCheck<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
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
                    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthenticationAuthenticationIdEligibilityCheckQueryKey>
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
      ...getAuthenticationAuthenticationIdEligibilityCheckQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAuthenticationAuthenticationIdEligibilityCheckMutationKey() {
  return ['authentication', '/authentication/:authentication_id/eligibility-check', 'POST'] as const
}

export function getPostAuthenticationAuthenticationIdEligibilityCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationAuthenticationIdEligibilityCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
      >,
    ) {
      return parseResponse(
        client.authentication[':authentication_id']['eligibility-check'].$post(args, options),
      )
    },
  })
}

export function createPostAuthenticationAuthenticationIdEligibilityCheck<
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
                    (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
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
    const mutationDefaults = getPostAuthenticationAuthenticationIdEligibilityCheckMutationOptions<
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

export function getPostUserCreatePlatformMutationKey() {
  return ['user', '/user/create_platform', 'POST'] as const
}

export function getPostUserCreatePlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.user.create_platform.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.user.create_platform.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserCreatePlatformMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.create_platform.$post>) {
      return parseResponse(client.user.create_platform.$post(args, options))
    },
  })
}

export function createPostUserCreatePlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.create_platform.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.create_platform.$post>,
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
    const mutationDefaults = getPostUserCreatePlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function getPostSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$post>) {
      return parseResponse(client.subscriptions.$post(args, options))
    },
  })
}

export function createPostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$post>,
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
    const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubscriptionsCreateMutationKey() {
  return ['subscriptions', '/subscriptions/create', 'POST'] as const
}

export function getPostSubscriptionsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.create.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.subscriptions.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.create.$post>) {
      return parseResponse(client.subscriptions.create.$post(args, options))
    },
  })
}

export function createPostSubscriptionsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.subscriptions.create.$post>,
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
    const mutationDefaults = getPostSubscriptionsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubscriptionsSubscriptionIdConfirmMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/confirm', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].confirm.$post(args, options))
    },
  })
}

export function createPostSubscriptionsSubscriptionIdConfirm<
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
                  ReturnType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsSubscriptionIdConfirmMutationOptions<
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

export function getSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscription_id', keyArgs] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSubscriptionsSubscriptionIdUpdateMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/update', 'PUT'] as const
}

export function getPutSubscriptionsSubscriptionIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsSubscriptionIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].update.$put(args, options))
    },
  })
}

export function createPutSubscriptionsSubscriptionIdUpdate<
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
                  ReturnType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>,
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
    const mutationDefaults = getPutSubscriptionsSubscriptionIdUpdateMutationOptions<
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

export function getSubscriptionsItemsQueryKey(
  args: InferRequestType<typeof client.subscriptions.items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/items', keyArgs] as const
}

export function getSubscriptionsItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsItemsQueryKey>
  >({
    queryKey: getSubscriptionsItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubscriptionsItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.items.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.items.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsItemsQueryKey>
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
    return { ...getSubscriptionsItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSubscriptionsEstimateQueryKey(
  args: InferRequestType<typeof client.subscriptions.estimate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/estimate', keyArgs] as const
}

export function getSubscriptionsEstimateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsEstimateQueryKey>
  >({
    queryKey: getSubscriptionsEstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.estimate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsEstimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.estimate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.estimate.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsEstimateQueryKey>
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
      ...getSubscriptionsEstimateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSubscriptionsSubscriptionIdPauseMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/pause', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].pause.$post(args, options))
    },
  })
}

export function createPostSubscriptionsSubscriptionIdPause<
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
                  ReturnType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsSubscriptionIdPauseMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdResumeMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/resume', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].resume.$post(args, options))
    },
  })
}

export function createPostSubscriptionsSubscriptionIdResume<
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
                  ReturnType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsSubscriptionIdResumeMutationOptions<
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

export function getPostSubscriptionsSubscriptionIdCancelMutationKey() {
  return ['subscriptions', '/subscriptions/:subscription_id/cancel', 'POST'] as const
}

export function getPostSubscriptionsSubscriptionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsSubscriptionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':subscription_id'].cancel.$post(args, options))
    },
  })
}

export function createPostSubscriptionsSubscriptionIdCancel<
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
                  ReturnType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsSubscriptionIdCancelMutationOptions<
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

export function getCardIssuersQueryKey() {
  return ['card_issuers', '/card_issuers'] as const
}

export function getCardIssuersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardIssuersQueryKey>
  >({
    queryKey: getCardIssuersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.card_issuers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCardIssuers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCardIssuersQueryKey>
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
    return { ...getCardIssuersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCardIssuersMutationKey() {
  return ['card_issuers', '/card_issuers', 'POST'] as const
}

export function getPostCardIssuersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.card_issuers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardIssuersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.card_issuers.$post>) {
      return parseResponse(client.card_issuers.$post(args, options))
    },
  })
}

export function createPostCardIssuers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.card_issuers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.card_issuers.$post>,
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
    const mutationDefaults = getPostCardIssuersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCardIssuersIdMutationKey() {
  return ['card_issuers', '/card_issuers/:id', 'PUT'] as const
}

export function getPutCardIssuersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.card_issuers)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.card_issuers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardIssuersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.card_issuers)[':id']['$put']>) {
      return parseResponse(client.card_issuers[':id'].$put(args, options))
    },
  })
}

export function createPutCardIssuersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.card_issuers)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.card_issuers)[':id']['$put']>,
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
    const mutationDefaults = getPutCardIssuersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCardIssuersIdMutationKey() {
  return ['card_issuers', '/card_issuers/:id', 'DELETE'] as const
}

export function getDeleteCardIssuersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.card_issuers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.card_issuers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardIssuersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.card_issuers)[':id']['$delete']>) {
      return parseResponse(client.card_issuers[':id'].$delete(args, options))
    },
  })
}

export function createDeleteCardIssuersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.card_issuers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.card_issuers)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCardIssuersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTelephoneOrderMerchantIdProviderMutationKey() {
  return ['telephone_order', '/telephone_order/:merchant_id/:provider', 'POST'] as const
}

export function getPostTelephoneOrderMerchantIdProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTelephoneOrderMerchantIdProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>,
    ) {
      return parseResponse(client.telephone_order[':merchant_id'][':provider'].$post(args, options))
    },
  })
}

export function createPostTelephoneOrderMerchantIdProvider<
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
                  ReturnType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>,
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
    const mutationDefaults = getPostTelephoneOrderMerchantIdProviderMutationOptions<
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
