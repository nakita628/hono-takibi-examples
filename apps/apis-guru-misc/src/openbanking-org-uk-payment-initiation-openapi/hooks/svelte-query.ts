import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDomesticPaymentConsentsKey() {
  return ['domestic-payment-consents'] as const
}

export function getDomesticPaymentsKey() {
  return ['domestic-payments'] as const
}

export function getDomesticScheduledPaymentConsentsKey() {
  return ['domestic-scheduled-payment-consents'] as const
}

export function getDomesticScheduledPaymentsKey() {
  return ['domestic-scheduled-payments'] as const
}

export function getDomesticStandingOrderConsentsKey() {
  return ['domestic-standing-order-consents'] as const
}

export function getDomesticStandingOrdersKey() {
  return ['domestic-standing-orders'] as const
}

export function getFilePaymentConsentsKey() {
  return ['file-payment-consents'] as const
}

export function getFilePaymentsKey() {
  return ['file-payments'] as const
}

export function getInternationalPaymentConsentsKey() {
  return ['international-payment-consents'] as const
}

export function getInternationalPaymentsKey() {
  return ['international-payments'] as const
}

export function getInternationalScheduledPaymentConsentsKey() {
  return ['international-scheduled-payment-consents'] as const
}

export function getInternationalScheduledPaymentsKey() {
  return ['international-scheduled-payments'] as const
}

export function getInternationalStandingOrderConsentsKey() {
  return ['international-standing-order-consents'] as const
}

export function getInternationalStandingOrdersKey() {
  return ['international-standing-orders'] as const
}

export function getPostDomesticPaymentConsentsMutationKey() {
  return ['domestic-payment-consents', '/domestic-payment-consents', 'POST'] as const
}

export function getPostDomesticPaymentConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['domestic-payment-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomesticPaymentConsentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['domestic-payment-consents']['$post']>,
    ) {
      return parseResponse(client['domestic-payment-consents'].$post(args, options))
    },
  })
}

export function createPostDomesticPaymentConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['domestic-payment-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['domestic-payment-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomesticPaymentConsentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomesticPaymentConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domestic-payment-consents', '/domestic-payment-consents/:ConsentId', keyArgs] as const
}

export function getDomesticPaymentConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticPaymentConsentsConsentIdQueryKey>
  >({
    queryKey: getDomesticPaymentConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-payment-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticPaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticPaymentConsentsConsentIdQueryKey>
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
      ...getDomesticPaymentConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey(
  args: InferRequestType<
    (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-payment-consents',
    '/domestic-payment-consents/:ConsentId/funds-confirmation',
    keyArgs,
  ] as const
}

export function getDomesticPaymentConsentsConsentIdFundsConfirmationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey>
  >({
    queryKey: getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-payment-consents'][':ConsentId']['funds-confirmation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticPaymentConsentsConsentIdFundsConfirmation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey>
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
      ...getDomesticPaymentConsentsConsentIdFundsConfirmationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDomesticPaymentsMutationKey() {
  return ['domestic-payments', '/domestic-payments', 'POST'] as const
}

export function getPostDomesticPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['domestic-payments']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['domestic-payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomesticPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['domestic-payments']['$post']>) {
      return parseResponse(client['domestic-payments'].$post(args, options))
    },
  })
}

export function createPostDomesticPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['domestic-payments']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['domestic-payments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomesticPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomesticPaymentsDomesticPaymentIdQueryKey(
  args: InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domestic-payments', '/domestic-payments/:DomesticPaymentId', keyArgs] as const
}

export function getDomesticPaymentsDomesticPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticPaymentsDomesticPaymentIdQueryKey>
  >({
    queryKey: getDomesticPaymentsDomesticPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-payments'][':DomesticPaymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticPaymentsDomesticPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticPaymentsDomesticPaymentIdQueryKey>
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
      ...getDomesticPaymentsDomesticPaymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-payments',
    '/domestic-payments/:DomesticPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey>
  >({
    queryKey: getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-payments'][':DomesticPaymentId']['payment-details'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticPaymentsDomesticPaymentIdPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey>
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
      ...getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDomesticScheduledPaymentConsentsMutationKey() {
  return [
    'domestic-scheduled-payment-consents',
    '/domestic-scheduled-payment-consents',
    'POST',
  ] as const
}

export function getPostDomesticScheduledPaymentConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-scheduled-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['domestic-scheduled-payment-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomesticScheduledPaymentConsentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['domestic-scheduled-payment-consents']['$post']>,
    ) {
      return parseResponse(client['domestic-scheduled-payment-consents'].$post(args, options))
    },
  })
}

export function createPostDomesticScheduledPaymentConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['domestic-scheduled-payment-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['domestic-scheduled-payment-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomesticScheduledPaymentConsentsMutationOptions<
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

export function getDomesticScheduledPaymentConsentsConsentIdQueryKey(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-scheduled-payment-consents',
    '/domestic-scheduled-payment-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getDomesticScheduledPaymentConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticScheduledPaymentConsentsConsentIdQueryKey>
  >({
    queryKey: getDomesticScheduledPaymentConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-scheduled-payment-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticScheduledPaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticScheduledPaymentConsentsConsentIdQueryKey>
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
      ...getDomesticScheduledPaymentConsentsConsentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDomesticScheduledPaymentsMutationKey() {
  return ['domestic-scheduled-payments', '/domestic-scheduled-payments', 'POST'] as const
}

export function getPostDomesticScheduledPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-scheduled-payments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['domestic-scheduled-payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomesticScheduledPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['domestic-scheduled-payments']['$post']>,
    ) {
      return parseResponse(client['domestic-scheduled-payments'].$post(args, options))
    },
  })
}

export function createPostDomesticScheduledPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['domestic-scheduled-payments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['domestic-scheduled-payments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomesticScheduledPaymentsMutationOptions<
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

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-scheduled-payments',
    '/domestic-scheduled-payments/:DomesticScheduledPaymentId',
    keyArgs,
  ] as const
}

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey>
  >({
    queryKey: getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticScheduledPaymentsDomesticScheduledPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey>
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
      ...getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-scheduled-payments',
    '/domestic-scheduled-payments/:DomesticScheduledPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey>
  >({
    queryKey: getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'][
          'payment-details'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey
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
      ...getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDomesticStandingOrderConsentsMutationKey() {
  return ['domestic-standing-order-consents', '/domestic-standing-order-consents', 'POST'] as const
}

export function getPostDomesticStandingOrderConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-standing-order-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['domestic-standing-order-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomesticStandingOrderConsentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['domestic-standing-order-consents']['$post']>,
    ) {
      return parseResponse(client['domestic-standing-order-consents'].$post(args, options))
    },
  })
}

export function createPostDomesticStandingOrderConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['domestic-standing-order-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['domestic-standing-order-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomesticStandingOrderConsentsMutationOptions<
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

export function getDomesticStandingOrderConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-standing-order-consents',
    '/domestic-standing-order-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getDomesticStandingOrderConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticStandingOrderConsentsConsentIdQueryKey>
  >({
    queryKey: getDomesticStandingOrderConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-standing-order-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticStandingOrderConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticStandingOrderConsentsConsentIdQueryKey>
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
      ...getDomesticStandingOrderConsentsConsentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDomesticStandingOrdersMutationKey() {
  return ['domestic-standing-orders', '/domestic-standing-orders', 'POST'] as const
}

export function getPostDomesticStandingOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-standing-orders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['domestic-standing-orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomesticStandingOrdersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['domestic-standing-orders']['$post']>) {
      return parseResponse(client['domestic-standing-orders'].$post(args, options))
    },
  })
}

export function createPostDomesticStandingOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['domestic-standing-orders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['domestic-standing-orders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDomesticStandingOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDomesticStandingOrdersDomesticStandingOrderIdQueryKey(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-standing-orders',
    '/domestic-standing-orders/:DomesticStandingOrderId',
    keyArgs,
  ] as const
}

export function getDomesticStandingOrdersDomesticStandingOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticStandingOrdersDomesticStandingOrderIdQueryKey>
  >({
    queryKey: getDomesticStandingOrdersDomesticStandingOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-standing-orders'][':DomesticStandingOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomesticStandingOrdersDomesticStandingOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticStandingOrdersDomesticStandingOrderIdQueryKey>
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
      ...getDomesticStandingOrdersDomesticStandingOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-standing-orders',
    '/domestic-standing-orders/:DomesticStandingOrderId/payment-details',
    keyArgs,
  ] as const
}

export function getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey>
  >({
    queryKey: getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey>
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
      ...getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostFilePaymentConsentsMutationKey() {
  return ['file-payment-consents', '/file-payment-consents', 'POST'] as const
}

export function getPostFilePaymentConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-payment-consents']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-payment-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilePaymentConsentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['file-payment-consents']['$post']>) {
      return parseResponse(client['file-payment-consents'].$post(args, options))
    },
  })
}

export function createPostFilePaymentConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-payment-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-payment-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilePaymentConsentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilePaymentConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payment-consents', '/file-payment-consents/:ConsentId', keyArgs] as const
}

export function getFilePaymentConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilePaymentConsentsConsentIdQueryKey>
  >({
    queryKey: getFilePaymentConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-payment-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilePaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilePaymentConsentsConsentIdQueryKey>
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
      ...getFilePaymentConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFilePaymentConsentsConsentIdFileQueryKey(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payment-consents', '/file-payment-consents/:ConsentId/file', keyArgs] as const
}

export function getFilePaymentConsentsConsentIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilePaymentConsentsConsentIdFileQueryKey>
  >({
    queryKey: getFilePaymentConsentsConsentIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-payment-consents'][':ConsentId'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilePaymentConsentsConsentIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['file-payment-consents'][':ConsentId']['file']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilePaymentConsentsConsentIdFileQueryKey>
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
      ...getFilePaymentConsentsConsentIdFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostFilePaymentConsentsConsentIdFileMutationKey() {
  return ['file-payment-consents', '/file-payment-consents/:ConsentId/file', 'POST'] as const
}

export function getPostFilePaymentConsentsConsentIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilePaymentConsentsConsentIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['file-payment-consents'][':ConsentId']['file']['$post']
      >,
    ) {
      return parseResponse(client['file-payment-consents'][':ConsentId'].file.$post(args, options))
    },
  })
}

export function createPostFilePaymentConsentsConsentIdFile<
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
                ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilePaymentConsentsConsentIdFileMutationOptions<
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

export function getPostFilePaymentsMutationKey() {
  return ['file-payments', '/file-payments', 'POST'] as const
}

export function getPostFilePaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-payments']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['file-payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFilePaymentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['file-payments']['$post']>) {
      return parseResponse(client['file-payments'].$post(args, options))
    },
  })
}

export function createPostFilePayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['file-payments']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['file-payments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilePaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilePaymentsFilePaymentIdQueryKey(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payments', '/file-payments/:FilePaymentId', keyArgs] as const
}

export function getFilePaymentsFilePaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilePaymentsFilePaymentIdQueryKey>
  >({
    queryKey: getFilePaymentsFilePaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-payments'][':FilePaymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilePaymentsFilePaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilePaymentsFilePaymentIdQueryKey>
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
      ...getFilePaymentsFilePaymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFilePaymentsFilePaymentIdPaymentDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payments', '/file-payments/:FilePaymentId/payment-details', keyArgs] as const
}

export function getFilePaymentsFilePaymentIdPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilePaymentsFilePaymentIdPaymentDetailsQueryKey>
  >({
    queryKey: getFilePaymentsFilePaymentIdPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-payments'][':FilePaymentId']['payment-details'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilePaymentsFilePaymentIdPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilePaymentsFilePaymentIdPaymentDetailsQueryKey>
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
      ...getFilePaymentsFilePaymentIdPaymentDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFilePaymentsFilePaymentIdReportFileQueryKey(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payments', '/file-payments/:FilePaymentId/report-file', keyArgs] as const
}

export function getFilePaymentsFilePaymentIdReportFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilePaymentsFilePaymentIdReportFileQueryKey>
  >({
    queryKey: getFilePaymentsFilePaymentIdReportFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['file-payments'][':FilePaymentId']['report-file'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilePaymentsFilePaymentIdReportFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilePaymentsFilePaymentIdReportFileQueryKey>
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
      ...getFilePaymentsFilePaymentIdReportFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostInternationalPaymentConsentsMutationKey() {
  return ['international-payment-consents', '/international-payment-consents', 'POST'] as const
}

export function getPostInternationalPaymentConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['international-payment-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInternationalPaymentConsentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['international-payment-consents']['$post']>,
    ) {
      return parseResponse(client['international-payment-consents'].$post(args, options))
    },
  })
}

export function createPostInternationalPaymentConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['international-payment-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['international-payment-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInternationalPaymentConsentsMutationOptions<
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

export function getInternationalPaymentConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-payment-consents',
    '/international-payment-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getInternationalPaymentConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalPaymentConsentsConsentIdQueryKey>
  >({
    queryKey: getInternationalPaymentConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-payment-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalPaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-payment-consents'][':ConsentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalPaymentConsentsConsentIdQueryKey>
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
      ...getInternationalPaymentConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey(
  args: InferRequestType<
    (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-payment-consents',
    '/international-payment-consents/:ConsentId/funds-confirmation',
    keyArgs,
  ] as const
}

export function getInternationalPaymentConsentsConsentIdFundsConfirmationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey>
  >({
    queryKey: getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-payment-consents'][':ConsentId']['funds-confirmation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalPaymentConsentsConsentIdFundsConfirmation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey>
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
      ...getInternationalPaymentConsentsConsentIdFundsConfirmationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostInternationalPaymentsMutationKey() {
  return ['international-payments', '/international-payments', 'POST'] as const
}

export function getPostInternationalPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-payments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['international-payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInternationalPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['international-payments']['$post']>) {
      return parseResponse(client['international-payments'].$post(args, options))
    },
  })
}

export function createPostInternationalPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['international-payments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['international-payments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInternationalPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInternationalPaymentsInternationalPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-payments',
    '/international-payments/:InternationalPaymentId',
    keyArgs,
  ] as const
}

export function getInternationalPaymentsInternationalPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['international-payments'][':InternationalPaymentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['international-payments'][':InternationalPaymentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalPaymentsInternationalPaymentIdQueryKey>
  >({
    queryKey: getInternationalPaymentsInternationalPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-payments'][':InternationalPaymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalPaymentsInternationalPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['international-payments'][':InternationalPaymentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-payments'][':InternationalPaymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalPaymentsInternationalPaymentIdQueryKey>
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
      ...getInternationalPaymentsInternationalPaymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-payments',
    '/international-payments/:InternationalPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey>
  >({
    queryKey: getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-payments'][':InternationalPaymentId']['payment-details'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalPaymentsInternationalPaymentIdPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey>
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
      ...getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostInternationalScheduledPaymentConsentsMutationKey() {
  return [
    'international-scheduled-payment-consents',
    '/international-scheduled-payment-consents',
    'POST',
  ] as const
}

export function getPostInternationalScheduledPaymentConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-scheduled-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['international-scheduled-payment-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInternationalScheduledPaymentConsentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['international-scheduled-payment-consents']['$post']>,
    ) {
      return parseResponse(client['international-scheduled-payment-consents'].$post(args, options))
    },
  })
}

export function createPostInternationalScheduledPaymentConsents<
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
                ReturnType<(typeof client)['international-scheduled-payment-consents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['international-scheduled-payment-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInternationalScheduledPaymentConsentsMutationOptions<
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

export function getInternationalScheduledPaymentConsentsConsentIdQueryKey(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-scheduled-payment-consents',
    '/international-scheduled-payment-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalScheduledPaymentConsentsConsentIdQueryKey>
  >({
    queryKey: getInternationalScheduledPaymentConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-scheduled-payment-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalScheduledPaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalScheduledPaymentConsentsConsentIdQueryKey>
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
      ...getInternationalScheduledPaymentConsentsConsentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-scheduled-payment-consents',
    '/international-scheduled-payment-consents/:ConsentId/funds-confirmation',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey>
  >({
    queryKey: getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createInternationalScheduledPaymentConsentsConsentIdFundsConfirmation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey
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
      ...getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostInternationalScheduledPaymentsMutationKey() {
  return ['international-scheduled-payments', '/international-scheduled-payments', 'POST'] as const
}

export function getPostInternationalScheduledPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-scheduled-payments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['international-scheduled-payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInternationalScheduledPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['international-scheduled-payments']['$post']>,
    ) {
      return parseResponse(client['international-scheduled-payments'].$post(args, options))
    },
  })
}

export function createPostInternationalScheduledPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['international-scheduled-payments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['international-scheduled-payments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInternationalScheduledPaymentsMutationOptions<
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

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-scheduled-payments',
    '/international-scheduled-payments/:InternationalScheduledPaymentId',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey>
  >({
    queryKey: getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-scheduled-payments'][':InternationalScheduledPaymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalScheduledPaymentsInternationalScheduledPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey>
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
      ...getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-scheduled-payments',
    '/international-scheduled-payments/:InternationalScheduledPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey
    >
  >({
    queryKey:
      getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-scheduled-payments'][':InternationalScheduledPaymentId'][
          'payment-details'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey
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
      ...getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostInternationalStandingOrderConsentsMutationKey() {
  return [
    'international-standing-order-consents',
    '/international-standing-order-consents',
    'POST',
  ] as const
}

export function getPostInternationalStandingOrderConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-standing-order-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['international-standing-order-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInternationalStandingOrderConsentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['international-standing-order-consents']['$post']>,
    ) {
      return parseResponse(client['international-standing-order-consents'].$post(args, options))
    },
  })
}

export function createPostInternationalStandingOrderConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['international-standing-order-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['international-standing-order-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInternationalStandingOrderConsentsMutationOptions<
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

export function getInternationalStandingOrderConsentsConsentIdQueryKey(
  args: InferRequestType<
    (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-standing-order-consents',
    '/international-standing-order-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getInternationalStandingOrderConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['international-standing-order-consents'][':ConsentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalStandingOrderConsentsConsentIdQueryKey>
  >({
    queryKey: getInternationalStandingOrderConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-standing-order-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalStandingOrderConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['international-standing-order-consents'][':ConsentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalStandingOrderConsentsConsentIdQueryKey>
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
      ...getInternationalStandingOrderConsentsConsentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostInternationalStandingOrdersMutationKey() {
  return ['international-standing-orders', '/international-standing-orders', 'POST'] as const
}

export function getPostInternationalStandingOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-standing-orders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['international-standing-orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInternationalStandingOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['international-standing-orders']['$post']>,
    ) {
      return parseResponse(client['international-standing-orders'].$post(args, options))
    },
  })
}

export function createPostInternationalStandingOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['international-standing-orders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['international-standing-orders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInternationalStandingOrdersMutationOptions<
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

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-standing-orders',
    '/international-standing-orders/:InternationalStandingOrderPaymentId',
    keyArgs,
  ] as const
}

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey>
  >({
    queryKey: getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-standing-orders'][':InternationalStandingOrderPaymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternationalStandingOrdersInternationalStandingOrderPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey>
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
      ...getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-standing-orders',
    '/international-standing-orders/:InternationalStandingOrderPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey
    >
  >({
    queryKey:
      getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['international-standing-orders'][':InternationalStandingOrderPaymentId'][
          'payment-details'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey
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
      ...getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
