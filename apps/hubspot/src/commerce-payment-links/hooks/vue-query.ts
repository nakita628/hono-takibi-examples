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

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getCommercePaymentLinks202609PaymentLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']>
  >,
) {
  return ['commerce', '/commerce/payment-links/2026-09/payment-links', toValue(args)] as const
}

export function getCommercePaymentLinks202609PaymentLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommercePaymentLinks202609PaymentLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.commerce['payment-links']['2026-09']['payment-links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommercePaymentLinks202609PaymentLinks<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']>
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
                    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
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
                    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommercePaymentLinks202609PaymentLinksQueryKey>
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
              (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePaymentLinks202609PaymentLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommercePaymentLinks202609PaymentLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.commerce['payment-links']['2026-09']['payment-links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCommercePaymentLinks202609PaymentLinks<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommercePaymentLinks202609PaymentLinksMutationOptions<
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

export function getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
    >
  >,
) {
  return [
    'commerce',
    '/commerce/payment-links/2026-09/payment-links/:paymentLinkId',
    toValue(args),
  ] as const
}

export function getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCommercePaymentLinks202609PaymentLinksPaymentLinkId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
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
                    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
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
                    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey>
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
              (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCommercePaymentLinks202609PaymentLinksPaymentLinkIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
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

export function usePatchCommercePaymentLinks202609PaymentLinksPaymentLinkId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchCommercePaymentLinks202609PaymentLinksPaymentLinkIdMutationOptions<
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
