import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostDomesticPaymentConsentsKey() {
  return ['domestic-payment-consents', '/domestic-payment-consents', 'POST'] as const
}

export function usePostDomesticPaymentConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['domestic-payment-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomesticPaymentConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['domestic-payment-consents']['$post']> },
      ) => parseResponse(client['domestic-payment-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomesticPaymentConsentsConsentIdKey(
  args: InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domestic-payment-consents', '/domestic-payment-consents/:ConsentId', keyArgs] as const
}

export function useGetDomesticPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
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
        ? getGetDomesticPaymentConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['domestic-payment-consents'][':ConsentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
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
        ? getGetDomesticPaymentConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payment-consents'][':ConsentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['domestic-payment-consents'][':ConsentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomesticPaymentConsentsConsentIdFundsConfirmationKey(
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

export function useGetDomesticPaymentConsentsConsentIdFundsConfirmation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticPaymentConsentsConsentIdFundsConfirmationKey(args)
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
                (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
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
          client['domestic-payment-consents'][':ConsentId']['funds-confirmation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticPaymentConsentsConsentIdFundsConfirmation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticPaymentConsentsConsentIdFundsConfirmationKey(args)
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
                (typeof client)['domestic-payment-consents'][':ConsentId']['funds-confirmation']['$get']
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
          client['domestic-payment-consents'][':ConsentId']['funds-confirmation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDomesticPaymentsKey() {
  return ['domestic-payments', '/domestic-payments', 'POST'] as const
}

export function usePostDomesticPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['domestic-payments']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['domestic-payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomesticPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['domestic-payments']['$post']> },
      ) => parseResponse(client['domestic-payments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomesticPaymentsDomesticPaymentIdKey(
  args: InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['domestic-payments', '/domestic-payments/:DomesticPaymentId', keyArgs] as const
}

export function useGetDomesticPaymentsDomesticPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
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
        ? getGetDomesticPaymentsDomesticPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['domestic-payments'][':DomesticPaymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticPaymentsDomesticPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
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
        ? getGetDomesticPaymentsDomesticPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['domestic-payments'][':DomesticPaymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['domestic-payments'][':DomesticPaymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDomesticPaymentsDomesticPaymentIdPaymentDetailsKey(
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

export function useGetDomesticPaymentsDomesticPaymentIdPaymentDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticPaymentsDomesticPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
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
          client['domestic-payments'][':DomesticPaymentId']['payment-details'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticPaymentsDomesticPaymentIdPaymentDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticPaymentsDomesticPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['domestic-payments'][':DomesticPaymentId']['payment-details']['$get']
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
          client['domestic-payments'][':DomesticPaymentId']['payment-details'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDomesticScheduledPaymentConsentsKey() {
  return [
    'domestic-scheduled-payment-consents',
    '/domestic-scheduled-payment-consents',
    'POST',
  ] as const
}

export function usePostDomesticScheduledPaymentConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-scheduled-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['domestic-scheduled-payment-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomesticScheduledPaymentConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['domestic-scheduled-payment-consents']['$post']>
        },
      ) => parseResponse(client['domestic-scheduled-payment-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomesticScheduledPaymentConsentsConsentIdKey(
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

export function useGetDomesticScheduledPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticScheduledPaymentConsentsConsentIdKey(args)
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
                (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
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
          client['domestic-scheduled-payment-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticScheduledPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticScheduledPaymentConsentsConsentIdKey(args)
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
                (typeof client)['domestic-scheduled-payment-consents'][':ConsentId']['$get']
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
          client['domestic-scheduled-payment-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDomesticScheduledPaymentsKey() {
  return ['domestic-scheduled-payments', '/domestic-scheduled-payments', 'POST'] as const
}

export function usePostDomesticScheduledPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-scheduled-payments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['domestic-scheduled-payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomesticScheduledPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['domestic-scheduled-payments']['$post']> },
      ) => parseResponse(client['domestic-scheduled-payments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomesticScheduledPaymentsDomesticScheduledPaymentIdKey(
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

export function useGetDomesticScheduledPaymentsDomesticScheduledPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticScheduledPaymentsDomesticScheduledPaymentIdKey(args)
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
                (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
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
          client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticScheduledPaymentsDomesticScheduledPaymentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticScheduledPaymentsDomesticScheduledPaymentIdKey(args)
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
                (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['$get']
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
          client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsKey(
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

export function useGetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
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
          client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'][
            'payment-details'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['domestic-scheduled-payments'][':DomesticScheduledPaymentId']['payment-details']['$get']
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
          client['domestic-scheduled-payments'][':DomesticScheduledPaymentId'][
            'payment-details'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDomesticStandingOrderConsentsKey() {
  return ['domestic-standing-order-consents', '/domestic-standing-order-consents', 'POST'] as const
}

export function usePostDomesticStandingOrderConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-standing-order-consents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['domestic-standing-order-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomesticStandingOrderConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['domestic-standing-order-consents']['$post']> },
      ) => parseResponse(client['domestic-standing-order-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomesticStandingOrderConsentsConsentIdKey(
  args: InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'domestic-standing-order-consents',
    '/domestic-standing-order-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function useGetDomesticStandingOrderConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
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
        ? getGetDomesticStandingOrderConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['domestic-standing-order-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticStandingOrderConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
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
        ? getGetDomesticStandingOrderConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['domestic-standing-order-consents'][':ConsentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['domestic-standing-order-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDomesticStandingOrdersKey() {
  return ['domestic-standing-orders', '/domestic-standing-orders', 'POST'] as const
}

export function usePostDomesticStandingOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['domestic-standing-orders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['domestic-standing-orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomesticStandingOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['domestic-standing-orders']['$post']> },
      ) => parseResponse(client['domestic-standing-orders'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomesticStandingOrdersDomesticStandingOrderIdKey(
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

export function useGetDomesticStandingOrdersDomesticStandingOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticStandingOrdersDomesticStandingOrderIdKey(args)
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
                (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
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
          client['domestic-standing-orders'][':DomesticStandingOrderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticStandingOrdersDomesticStandingOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticStandingOrdersDomesticStandingOrderIdKey(args)
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
                (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['$get']
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
          client['domestic-standing-orders'][':DomesticStandingOrderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsKey(
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

export function useGetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsKey(args)
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
                (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
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
          client['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsKey(args)
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
                (typeof client)['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details']['$get']
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
          client['domestic-standing-orders'][':DomesticStandingOrderId']['payment-details'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFilePaymentConsentsKey() {
  return ['file-payment-consents', '/file-payment-consents', 'POST'] as const
}

export function usePostFilePaymentConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-payment-consents']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-payment-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilePaymentConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['file-payment-consents']['$post']> },
      ) => parseResponse(client['file-payment-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilePaymentConsentsConsentIdKey(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payment-consents', '/file-payment-consents/:ConsentId', keyArgs] as const
}

export function useGetFilePaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
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
        ? getGetFilePaymentConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-payment-consents'][':ConsentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilePaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
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
        ? getGetFilePaymentConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-payment-consents'][':ConsentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilePaymentConsentsConsentIdFileKey(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payment-consents', '/file-payment-consents/:ConsentId/file', keyArgs] as const
}

export function useGetFilePaymentConsentsConsentIdFile<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
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
        ? getGetFilePaymentConsentsConsentIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-payment-consents'][':ConsentId'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilePaymentConsentsConsentIdFile<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
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
        ? getGetFilePaymentConsentsConsentIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-payment-consents'][':ConsentId'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilePaymentConsentsConsentIdFileKey() {
  return ['file-payment-consents', '/file-payment-consents/:ConsentId/file', 'POST'] as const
}

export function usePostFilePaymentConsentsConsentIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['file-payment-consents'][':ConsentId']['file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilePaymentConsentsConsentIdFileKey()
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
            (typeof client)['file-payment-consents'][':ConsentId']['file']['$post']
          >
        },
      ) =>
        parseResponse(client['file-payment-consents'][':ConsentId'].file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilePaymentsKey() {
  return ['file-payments', '/file-payments', 'POST'] as const
}

export function usePostFilePayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['file-payments']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['file-payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilePaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['file-payments']['$post']> },
      ) => parseResponse(client['file-payments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilePaymentsFilePaymentIdKey(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payments', '/file-payments/:FilePaymentId', keyArgs] as const
}

export function useGetFilePaymentsFilePaymentId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
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
        ? getGetFilePaymentsFilePaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-payments'][':FilePaymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilePaymentsFilePaymentId<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
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
        ? getGetFilePaymentsFilePaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['file-payments'][':FilePaymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['file-payments'][':FilePaymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilePaymentsFilePaymentIdPaymentDetailsKey(
  args: InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payments', '/file-payments/:FilePaymentId/payment-details', keyArgs] as const
}

export function useGetFilePaymentsFilePaymentIdPaymentDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFilePaymentsFilePaymentIdPaymentDetailsKey(args)
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
                (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
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
          client['file-payments'][':FilePaymentId']['payment-details'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilePaymentsFilePaymentIdPaymentDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetFilePaymentsFilePaymentIdPaymentDetailsKey(args)
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
                (typeof client)['file-payments'][':FilePaymentId']['payment-details']['$get']
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
          client['file-payments'][':FilePaymentId']['payment-details'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFilePaymentsFilePaymentIdReportFileKey(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['file-payments', '/file-payments/:FilePaymentId/report-file', keyArgs] as const
}

export function useGetFilePaymentsFilePaymentIdReportFile<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
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
        ? getGetFilePaymentsFilePaymentIdReportFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['file-payments'][':FilePaymentId']['report-file'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilePaymentsFilePaymentIdReportFile<TError = unknown>(
  args: InferRequestType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
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
        ? getGetFilePaymentsFilePaymentIdReportFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['file-payments'][':FilePaymentId']['report-file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['file-payments'][':FilePaymentId']['report-file'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInternationalPaymentConsentsKey() {
  return ['international-payment-consents', '/international-payment-consents', 'POST'] as const
}

export function usePostInternationalPaymentConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['international-payment-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternationalPaymentConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['international-payment-consents']['$post']> },
      ) => parseResponse(client['international-payment-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternationalPaymentConsentsConsentIdKey(
  args: InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'international-payment-consents',
    '/international-payment-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function useGetInternationalPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
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
        ? getGetInternationalPaymentConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['international-payment-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
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
        ? getGetInternationalPaymentConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['international-payment-consents'][':ConsentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['international-payment-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInternationalPaymentConsentsConsentIdFundsConfirmationKey(
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

export function useGetInternationalPaymentConsentsConsentIdFundsConfirmation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalPaymentConsentsConsentIdFundsConfirmationKey(args)
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
                (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
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
          client['international-payment-consents'][':ConsentId']['funds-confirmation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalPaymentConsentsConsentIdFundsConfirmation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalPaymentConsentsConsentIdFundsConfirmationKey(args)
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
                (typeof client)['international-payment-consents'][':ConsentId']['funds-confirmation']['$get']
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
          client['international-payment-consents'][':ConsentId']['funds-confirmation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInternationalPaymentsKey() {
  return ['international-payments', '/international-payments', 'POST'] as const
}

export function usePostInternationalPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-payments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['international-payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternationalPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['international-payments']['$post']> },
      ) => parseResponse(client['international-payments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternationalPaymentsInternationalPaymentIdKey(
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

export function useGetInternationalPaymentsInternationalPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalPaymentsInternationalPaymentIdKey(args)
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
                (typeof client)['international-payments'][':InternationalPaymentId']['$get']
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
          client['international-payments'][':InternationalPaymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalPaymentsInternationalPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalPaymentsInternationalPaymentIdKey(args)
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
                (typeof client)['international-payments'][':InternationalPaymentId']['$get']
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
          client['international-payments'][':InternationalPaymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInternationalPaymentsInternationalPaymentIdPaymentDetailsKey(
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

export function useGetInternationalPaymentsInternationalPaymentIdPaymentDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalPaymentsInternationalPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
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
          client['international-payments'][':InternationalPaymentId']['payment-details'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalPaymentsInternationalPaymentIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalPaymentsInternationalPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['international-payments'][':InternationalPaymentId']['payment-details']['$get']
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
          client['international-payments'][':InternationalPaymentId']['payment-details'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInternationalScheduledPaymentConsentsKey() {
  return [
    'international-scheduled-payment-consents',
    '/international-scheduled-payment-consents',
    'POST',
  ] as const
}

export function usePostInternationalScheduledPaymentConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-scheduled-payment-consents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['international-scheduled-payment-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternationalScheduledPaymentConsentsKey()
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
            (typeof client)['international-scheduled-payment-consents']['$post']
          >
        },
      ) =>
        parseResponse(client['international-scheduled-payment-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternationalScheduledPaymentConsentsConsentIdKey(
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

export function useGetInternationalScheduledPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentConsentsConsentIdKey(args)
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
                (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
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
          client['international-scheduled-payment-consents'][':ConsentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalScheduledPaymentConsentsConsentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentConsentsConsentIdKey(args)
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
                (typeof client)['international-scheduled-payment-consents'][':ConsentId']['$get']
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
          client['international-scheduled-payment-consents'][':ConsentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationKey(
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

export function useGetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationKey(args)
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
                (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
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
          client['international-scheduled-payment-consents'][':ConsentId'][
            'funds-confirmation'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationKey(args)
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
                (typeof client)['international-scheduled-payment-consents'][':ConsentId']['funds-confirmation']['$get']
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
          client['international-scheduled-payment-consents'][':ConsentId'][
            'funds-confirmation'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInternationalScheduledPaymentsKey() {
  return ['international-scheduled-payments', '/international-scheduled-payments', 'POST'] as const
}

export function usePostInternationalScheduledPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-scheduled-payments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['international-scheduled-payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternationalScheduledPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['international-scheduled-payments']['$post']> },
      ) => parseResponse(client['international-scheduled-payments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternationalScheduledPaymentsInternationalScheduledPaymentIdKey(
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

export function useGetInternationalScheduledPaymentsInternationalScheduledPaymentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentsInternationalScheduledPaymentIdKey(args)
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
                (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
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
          client['international-scheduled-payments'][':InternationalScheduledPaymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalScheduledPaymentsInternationalScheduledPaymentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentsInternationalScheduledPaymentIdKey(args)
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
                (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['$get']
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
          client['international-scheduled-payments'][':InternationalScheduledPaymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsKey(
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

export function useGetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
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
          client['international-scheduled-payments'][':InternationalScheduledPaymentId'][
            'payment-details'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsKey(args)
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
                (typeof client)['international-scheduled-payments'][':InternationalScheduledPaymentId']['payment-details']['$get']
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
          client['international-scheduled-payments'][':InternationalScheduledPaymentId'][
            'payment-details'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInternationalStandingOrderConsentsKey() {
  return [
    'international-standing-order-consents',
    '/international-standing-order-consents',
    'POST',
  ] as const
}

export function usePostInternationalStandingOrderConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-standing-order-consents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['international-standing-order-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternationalStandingOrderConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['international-standing-order-consents']['$post']>
        },
      ) => parseResponse(client['international-standing-order-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternationalStandingOrderConsentsConsentIdKey(
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

export function useGetInternationalStandingOrderConsentsConsentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalStandingOrderConsentsConsentIdKey(args)
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
                (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
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
          client['international-standing-order-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalStandingOrderConsentsConsentId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalStandingOrderConsentsConsentIdKey(args)
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
                (typeof client)['international-standing-order-consents'][':ConsentId']['$get']
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
          client['international-standing-order-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInternationalStandingOrdersKey() {
  return ['international-standing-orders', '/international-standing-orders', 'POST'] as const
}

export function usePostInternationalStandingOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['international-standing-orders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['international-standing-orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInternationalStandingOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['international-standing-orders']['$post']> },
      ) => parseResponse(client['international-standing-orders'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInternationalStandingOrdersInternationalStandingOrderPaymentIdKey(
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

export function useGetInternationalStandingOrdersInternationalStandingOrderPaymentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalStandingOrdersInternationalStandingOrderPaymentIdKey(args)
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
                (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
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
          client['international-standing-orders'][':InternationalStandingOrderPaymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalStandingOrdersInternationalStandingOrderPaymentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalStandingOrdersInternationalStandingOrderPaymentIdKey(args)
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
                (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['$get']
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
          client['international-standing-orders'][':InternationalStandingOrderPaymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsKey(
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

export function useGetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsKey(
            args,
          )
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
                (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
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
          client['international-standing-orders'][':InternationalStandingOrderPaymentId'][
            'payment-details'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsKey(
            args,
          )
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
                (typeof client)['international-standing-orders'][':InternationalStandingOrderPaymentId']['payment-details']['$get']
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
          client['international-standing-orders'][':InternationalStandingOrderPaymentId'][
            'payment-details'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
