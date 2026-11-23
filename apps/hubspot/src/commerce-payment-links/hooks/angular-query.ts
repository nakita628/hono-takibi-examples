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

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getCommercePaymentLinks202609PaymentLinksQueryKey(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
  >,
) {
  return ['commerce', '/commerce/payment-links/2026-09/payment-links', args] as const
}

export function getCommercePaymentLinks202609PaymentLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCommercePaymentLinks202609PaymentLinksQueryKey>
  >({
    queryKey: getCommercePaymentLinks202609PaymentLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce['payment-links']['2026-09']['payment-links'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCommercePaymentLinks202609PaymentLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCommercePaymentLinks202609PaymentLinksQueryKey>
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
      ...getCommercePaymentLinks202609PaymentLinksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCommercePaymentLinks202609PaymentLinksMutationKey() {
  return ['commerce', '/commerce/payment-links/2026-09/payment-links', 'POST'] as const
}

export function getPostCommercePaymentLinks202609PaymentLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePaymentLinks202609PaymentLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['payment-links']['2026-09']['payment-links'].$post(args, options),
      )
    },
  })
}

export function injectPostCommercePaymentLinks202609PaymentLinks<
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
                  (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']
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
    const mutationDefaults = getPostCommercePaymentLinks202609PaymentLinksMutationOptions<
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

export function getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
  >,
) {
  return ['commerce', '/commerce/payment-links/2026-09/payment-links/:paymentLinkId', args] as const
}

export function getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey>
  >({
    queryKey: getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCommercePaymentLinks202609PaymentLinksPaymentLinkId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey>
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
      ...getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationKey() {
  return [
    'commerce',
    '/commerce/payment-links/2026-09/payment-links/:paymentLinkId',
    'DELETE',
  ] as const
}

export function getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkId<
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
                    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
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
    const mutationDefaults =
      getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
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

export function getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationKey() {
  return [
    'commerce',
    '/commerce/payment-links/2026-09/payment-links/:paymentLinkId',
    'PATCH',
  ] as const
}

export function getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
      >,
    ) {
      return parseResponse(
        client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchCommercePaymentLinks202609PaymentLinksPaymentLinkId<
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
                  (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
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
    const mutationDefaults =
      getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
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
