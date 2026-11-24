import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function usePostDomesticPaymentConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomesticPaymentConsentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomesticPaymentConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domestic-payment-consents', '/domestic-payment-consents/:ConsentId', keyArgs] as const
}

export function getDomesticPaymentConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticPaymentConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-payment-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomesticPaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDomesticPaymentConsentsConsentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomesticPaymentConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-payment-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-payment-consents',
    '/domestic-payment-consents/:ConsentId/funds-confirmation',
    keyArgs,
  ] as const
}

export function getDomesticPaymentConsentsConsentIdFundsConfirmationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-payment-consents'][':ConsentId']['funds-confirmation'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDomesticPaymentConsentsConsentIdFundsConfirmation<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomesticPaymentConsentsConsentIdFundsConfirmationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-payment-consents'][':ConsentId']['funds-confirmation'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostDomesticPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['domestic-payments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['domestic-payments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomesticPaymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomesticPaymentsDomesticPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['domestic-payments', '/domestic-payments/:DomesticPaymentId', keyArgs] as const
}

export function getDomesticPaymentsDomesticPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticPaymentsDomesticPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-payments'][':DomesticPaymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomesticPaymentsDomesticPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDomesticPaymentsDomesticPaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomesticPaymentsDomesticPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-payments'][':DomesticPaymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-payments',
    '/domestic-payments/:DomesticPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-payments'][':DomesticPaymentId']['payment-details'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomesticPaymentsDomesticPaymentIdPaymentDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomesticPaymentsDomesticPaymentIdPaymentDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-payments'][':DomesticPaymentId']['payment-details'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDomesticScheduledPaymentConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomesticScheduledPaymentConsentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomesticScheduledPaymentConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-scheduled-payment-consents',
    '/domestic-scheduled-payment-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getDomesticScheduledPaymentConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticScheduledPaymentConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-scheduled-payment-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomesticScheduledPaymentConsentsConsentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomesticScheduledPaymentConsentsConsentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomesticScheduledPaymentConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-scheduled-payment-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDomesticScheduledPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomesticScheduledPaymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-scheduled-payments',
    '/domestic-scheduled-payments/:DomesticScheduledPaymentId',
    keyArgs,
  ] as const
}

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomesticScheduledPaymentsDomesticScheduledPaymentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDomesticScheduledPaymentsDomesticScheduledPaymentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-scheduled-payments',
    '/domestic-scheduled-payments/:DomesticScheduledPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'][
          'payment-details'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'][
            'payment-details'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDomesticStandingOrderConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomesticStandingOrderConsentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomesticStandingOrderConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-standing-order-consents',
    '/domestic-standing-order-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getDomesticStandingOrderConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticStandingOrderConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-standing-order-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomesticStandingOrderConsentsConsentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomesticStandingOrderConsentsConsentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomesticStandingOrderConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-standing-order-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDomesticStandingOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDomesticStandingOrdersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDomesticStandingOrdersDomesticStandingOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-standing-orders',
    '/domestic-standing-orders/:DomesticStandingOrderId',
    keyArgs,
  ] as const
}

export function getDomesticStandingOrdersDomesticStandingOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomesticStandingOrdersDomesticStandingOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-standing-orders'][':DomesticStandingOrderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomesticStandingOrdersDomesticStandingOrderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomesticStandingOrdersDomesticStandingOrderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomesticStandingOrdersDomesticStandingOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-standing-orders'][':DomesticStandingOrderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'domestic-standing-orders',
    '/domestic-standing-orders/:DomesticStandingOrderId/payment-details',
    keyArgs,
  ] as const
}

export function getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostFilePaymentConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilePaymentConsentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilePaymentConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-payment-consents', '/file-payment-consents/:ConsentId', keyArgs] as const
}

export function getFilePaymentConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilePaymentConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-payment-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilePaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilePaymentConsentsConsentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilePaymentConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-payment-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilePaymentConsentsConsentIdFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-payment-consents', '/file-payment-consents/:ConsentId/file', keyArgs] as const
}

export function getFilePaymentConsentsConsentIdFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilePaymentConsentsConsentIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-payment-consents'][':ConsentId'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilePaymentConsentsConsentIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFilePaymentConsentsConsentIdFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilePaymentConsentsConsentIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-payment-consents'][':ConsentId'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFilePaymentConsentsConsentIdFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['file-payment-consents'][':ConsentId']['file']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilePaymentConsentsConsentIdFileMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostFilePayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['file-payments']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['file-payments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFilePaymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilePaymentsFilePaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-payments', '/file-payments/:FilePaymentId', keyArgs] as const
}

export function getFilePaymentsFilePaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilePaymentsFilePaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-payments'][':FilePaymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilePaymentsFilePaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilePaymentsFilePaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilePaymentsFilePaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-payments'][':FilePaymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilePaymentsFilePaymentIdPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-payments', '/file-payments/:FilePaymentId/payment-details', keyArgs] as const
}

export function getFilePaymentsFilePaymentIdPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilePaymentsFilePaymentIdPaymentDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-payments'][':FilePaymentId']['payment-details'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilePaymentsFilePaymentIdPaymentDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getFilePaymentsFilePaymentIdPaymentDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilePaymentsFilePaymentIdPaymentDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-payments'][':FilePaymentId']['payment-details'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilePaymentsFilePaymentIdReportFileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['file-payments', '/file-payments/:FilePaymentId/report-file', keyArgs] as const
}

export function getFilePaymentsFilePaymentIdReportFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilePaymentsFilePaymentIdReportFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['file-payments'][':FilePaymentId']['report-file'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilePaymentsFilePaymentIdReportFile<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getFilePaymentsFilePaymentIdReportFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilePaymentsFilePaymentIdReportFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['file-payments'][':FilePaymentId']['report-file'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInternationalPaymentConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInternationalPaymentConsentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternationalPaymentConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-payment-consents',
    '/international-payment-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getInternationalPaymentConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternationalPaymentConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-payment-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternationalPaymentConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['international-payment-consents'][':ConsentId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['international-payment-consents'][':ConsentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInternationalPaymentConsentsConsentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternationalPaymentConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['international-payment-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-payment-consents',
    '/international-payment-consents/:ConsentId/funds-confirmation',
    keyArgs,
  ] as const
}

export function getInternationalPaymentConsentsConsentIdFundsConfirmationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-payment-consents'][':ConsentId']['funds-confirmation'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useInternationalPaymentConsentsConsentIdFundsConfirmation<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternationalPaymentConsentsConsentIdFundsConfirmationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['international-payment-consents'][':ConsentId']['funds-confirmation'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostInternationalPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInternationalPaymentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternationalPaymentsInternationalPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-payments'][':InternationalPaymentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-payments',
    '/international-payments/:InternationalPaymentId',
    keyArgs,
  ] as const
}

export function getInternationalPaymentsInternationalPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-payments'][':InternationalPaymentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternationalPaymentsInternationalPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-payments'][':InternationalPaymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternationalPaymentsInternationalPaymentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-payments'][':InternationalPaymentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getInternationalPaymentsInternationalPaymentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternationalPaymentsInternationalPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['international-payments'][':InternationalPaymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-payments',
    '/international-payments/:InternationalPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-payments'][':InternationalPaymentId']['payment-details'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useInternationalPaymentsInternationalPaymentIdPaymentDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternationalPaymentsInternationalPaymentIdPaymentDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['international-payments'][':InternationalPaymentId']['payment-details'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostInternationalScheduledPaymentConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInternationalScheduledPaymentConsentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternationalScheduledPaymentConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-scheduled-payment-consents',
    '/international-scheduled-payment-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternationalScheduledPaymentConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-scheduled-payment-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternationalScheduledPaymentConsentsConsentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getInternationalScheduledPaymentConsentsConsentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternationalScheduledPaymentConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['international-scheduled-payment-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-scheduled-payment-consents',
    '/international-scheduled-payment-consents/:ConsentId/funds-confirmation',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useInternationalScheduledPaymentConsentsConsentIdFundsConfirmation<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['international-scheduled-payment-consents'][':ConsentId'][
            'funds-confirmation'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInternationalScheduledPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInternationalScheduledPaymentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-scheduled-payments',
    '/international-scheduled-payments/:InternationalScheduledPaymentId',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-scheduled-payments'][':InternationalScheduledPaymentId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useInternationalScheduledPaymentsInternationalScheduledPaymentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternationalScheduledPaymentsInternationalScheduledPaymentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['international-scheduled-payments'][':InternationalScheduledPaymentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-scheduled-payments',
    '/international-scheduled-payments/:InternationalScheduledPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-scheduled-payments'][':InternationalScheduledPaymentId'][
          'payment-details'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['international-scheduled-payments'][':InternationalScheduledPaymentId'][
            'payment-details'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInternationalStandingOrderConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['international-standing-order-consents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['international-standing-order-consents']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInternationalStandingOrderConsentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternationalStandingOrderConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-standing-order-consents'][':ConsentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-standing-order-consents',
    '/international-standing-order-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getInternationalStandingOrderConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-standing-order-consents'][':ConsentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInternationalStandingOrderConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-standing-order-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInternationalStandingOrderConsentsConsentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['international-standing-order-consents'][':ConsentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getInternationalStandingOrderConsentsConsentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInternationalStandingOrderConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['international-standing-order-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInternationalStandingOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInternationalStandingOrdersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-standing-orders',
    '/international-standing-orders/:InternationalStandingOrderPaymentId',
    keyArgs,
  ] as const
}

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-standing-orders'][':InternationalStandingOrderPaymentId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useInternationalStandingOrdersInternationalStandingOrderPaymentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternationalStandingOrdersInternationalStandingOrderPaymentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['international-standing-orders'][':InternationalStandingOrderPaymentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'international-standing-orders',
    '/international-standing-orders/:InternationalStandingOrderPaymentId/payment-details',
    keyArgs,
  ] as const
}

export function getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['international-standing-orders'][':InternationalStandingOrderPaymentId'][
          'payment-details'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['international-standing-orders'][':InternationalStandingOrderPaymentId'][
            'payment-details'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
