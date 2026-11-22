import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2PaymentsAuthorizationsAuthorizationIdKey(
  args: InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/authorizations/:authorization_id', keyArgs] as const
}

export function useGetV2PaymentsAuthorizationsAuthorizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
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
        ? getGetV2PaymentsAuthorizationsAuthorizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.payments.authorizations[':authorization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsAuthorizationsAuthorizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
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
        ? getGetV2PaymentsAuthorizationsAuthorizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.payments.authorizations[':authorization_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentsAuthorizationsAuthorizationIdCaptureKey() {
  return ['v2', '/v2/payments/authorizations/:authorization_id/capture', 'POST'] as const
}

export function usePostV2PaymentsAuthorizationsAuthorizationIdCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsAuthorizationsAuthorizationIdCaptureKey()
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
            (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.payments.authorizations[':authorization_id'].capture.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentsAuthorizationsAuthorizationIdReauthorizeKey() {
  return ['v2', '/v2/payments/authorizations/:authorization_id/reauthorize', 'POST'] as const
}

export function usePostV2PaymentsAuthorizationsAuthorizationIdReauthorize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsAuthorizationsAuthorizationIdReauthorizeKey()
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
            (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.payments.authorizations[':authorization_id'].reauthorize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentsAuthorizationsAuthorizationIdVoidKey() {
  return ['v2', '/v2/payments/authorizations/:authorization_id/void', 'POST'] as const
}

export function usePostV2PaymentsAuthorizationsAuthorizationIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsAuthorizationsAuthorizationIdVoidKey()
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
            (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.payments.authorizations[':authorization_id'].void.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsCapturesCaptureIdKey(
  args: InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/captures/:capture_id', keyArgs] as const
}

export function useGetV2PaymentsCapturesCaptureId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
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
        ? getGetV2PaymentsCapturesCaptureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.payments.captures[':capture_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsCapturesCaptureId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
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
        ? getGetV2PaymentsCapturesCaptureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.payments.captures[':capture_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentsCapturesCaptureIdRefundKey() {
  return ['v2', '/v2/payments/captures/:capture_id/refund', 'POST'] as const
}

export function usePostV2PaymentsCapturesCaptureIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.payments.captures)[':capture_id']['refund']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsCapturesCaptureIdRefundKey()
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
            (typeof client.v2.payments.captures)[':capture_id']['refund']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.payments.captures[':capture_id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentsFindEligibleMethodsKey() {
  return ['v2', '/v2/payments/find-eligible-methods', 'POST'] as const
}

export function usePostV2PaymentsFindEligibleMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)['find-eligible-methods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)['find-eligible-methods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsFindEligibleMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.payments)['find-eligible-methods']['$post']> },
      ) => parseResponse(client.v2.payments['find-eligible-methods'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsRefundsRefundIdKey(
  args: InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/refunds/:refund_id', keyArgs] as const
}

export function useGetV2PaymentsRefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
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
        ? getGetV2PaymentsRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments.refunds[':refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsRefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
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
        ? getGetV2PaymentsRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments.refunds[':refund_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
