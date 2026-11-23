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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1PaymentLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-links']['$get']>>,
) {
  return ['v1', '/v1/payment-links', toValue(args)] as const
}

export function getV1PaymentLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-links']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-links']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
            >
          >,
          ReturnType<typeof getV1PaymentLinksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['payment-links']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1PaymentLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-links']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['payment-links']['$post']>,
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
  const mutationDefaults = getPostV1PaymentLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV1PaymentLinksLinkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$get']>>,
) {
  return ['v1', '/v1/payment-links/:linkId', toValue(args)] as const
}

export function getV1PaymentLinksLinkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentLinksLinkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['payment-links'][':linkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentLinksLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['payment-links'][':linkId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentLinksLinkIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['payment-links'][':linkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentLinksLinkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentLinksLinkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['payment-links'][':linkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1PaymentLinksLinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1PaymentLinksLinkIdMutationOptions<TError, TOnMutateResult>(
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
