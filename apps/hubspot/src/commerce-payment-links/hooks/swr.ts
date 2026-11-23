import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getGetCommercePaymentLinks202609PaymentLinksKey(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
  >,
) {
  return ['commerce', '/commerce/payment-links/2026-09/payment-links', args] as const
}

export function useGetCommercePaymentLinks202609PaymentLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
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
        ? getGetCommercePaymentLinks202609PaymentLinksKey(args)
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
                (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
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
          client.commerce['payment-links']['2026-09']['payment-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercePaymentLinks202609PaymentLinks<TError = unknown>(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
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
        ? getGetCommercePaymentLinks202609PaymentLinksKey(args)
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
                (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
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
          client.commerce['payment-links']['2026-09']['payment-links'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCommercePaymentLinks202609PaymentLinksKey() {
  return ['commerce', '/commerce/payment-links/2026-09/payment-links', 'POST'] as const
}

export function usePostCommercePaymentLinks202609PaymentLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommercePaymentLinks202609PaymentLinksKey()
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
            (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['payment-links']['2026-09']['payment-links'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommercePaymentLinks202609PaymentLinksPaymentLinkIdKey(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
  >,
) {
  return ['commerce', '/commerce/payment-links/2026-09/payment-links/:paymentLinkId', args] as const
}

export function useGetCommercePaymentLinks202609PaymentLinksPaymentLinkId<TError = unknown>(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
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
        ? getGetCommercePaymentLinks202609PaymentLinksPaymentLinkIdKey(args)
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
                (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
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
          client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercePaymentLinks202609PaymentLinksPaymentLinkId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
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
        ? getGetCommercePaymentLinks202609PaymentLinksPaymentLinkIdKey(args)
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
                (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
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
          client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdKey() {
  return [
    'commerce',
    '/commerce/payment-links/2026-09/payment-links/:paymentLinkId',
    'DELETE',
  ] as const
}

export function useDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdKey()
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
            (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdKey() {
  return [
    'commerce',
    '/commerce/payment-links/2026-09/payment-links/:paymentLinkId',
    'PATCH',
  ] as const
}

export function usePatchCommercePaymentLinks202609PaymentLinksPaymentLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdKey()
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
            (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
