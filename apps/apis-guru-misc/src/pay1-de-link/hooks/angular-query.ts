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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1PaymentLinksQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-links']['$get']>,
) {
  return ['v1', '/v1/payment-links', args] as const
}

export function getV1PaymentLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentLinksQueryKey>
  >({
    queryKey: getV1PaymentLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-links'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1PaymentLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['payment-links']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentLinksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1PaymentLinksMutationKey() {
  return ['v1', '/v1/payment-links', 'POST'] as const
}

export function getPostV1PaymentLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['payment-links']['$post']>) {
      return parseResponse(client.v1['payment-links'].$post(args, options))
    },
  })
}

export function injectPostV1PaymentLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['payment-links']['$post']>,
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
    const mutationDefaults = getPostV1PaymentLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1PaymentLinksLinkIdQueryKey(
  args: InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$get']>,
) {
  return ['v1', '/v1/payment-links/:linkId', args] as const
}

export function getV1PaymentLinksLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentLinksLinkIdQueryKey>
  >({
    queryKey: getV1PaymentLinksLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['payment-links'][':linkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1PaymentLinksLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentLinksLinkIdQueryKey>
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
      ...getV1PaymentLinksLinkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1PaymentLinksLinkIdMutationKey() {
  return ['v1', '/v1/payment-links/:linkId', 'PUT'] as const
}

export function getPutV1PaymentLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1PaymentLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$put']>,
    ) {
      return parseResponse(client.v1['payment-links'][':linkId'].$put(args, options))
    },
  })
}

export function injectPutV1PaymentLinksLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$put']>,
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
    const mutationDefaults = getPutV1PaymentLinksLinkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
