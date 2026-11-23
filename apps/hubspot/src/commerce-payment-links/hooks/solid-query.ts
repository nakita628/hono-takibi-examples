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

export function createCommercePaymentLinks202609PaymentLinks<
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCommercePaymentLinks202609PaymentLinksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCommercePaymentLinks202609PaymentLinks<
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
    const mutationDefaults = getPostCommercePaymentLinks202609PaymentLinksMutationOptions<
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

export function createCommercePaymentLinks202609PaymentLinksPaymentLinkId<
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
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
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
      getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
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

export function createPatchCommercePaymentLinks202609PaymentLinksPaymentLinkId<
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
      getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
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
