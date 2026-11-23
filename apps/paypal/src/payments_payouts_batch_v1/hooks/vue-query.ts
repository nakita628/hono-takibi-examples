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

export function getPostV1PaymentsPayoutsMutationKey() {
  return ['v1', '/v1/payments/payouts', 'POST'] as const
}

export function getPostV1PaymentsPayoutsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.payouts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.payments.payouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsPayoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.payments.payouts.$post>) {
      return parseResponse(client.v1.payments.payouts.$post(args, options))
    },
  })
}

export function usePostV1PaymentsPayouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.payouts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.payments.payouts.$post>,
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
  const mutationDefaults = getPostV1PaymentsPayoutsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PaymentsPayoutsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>>,
) {
  return ['v1', '/v1/payments/payouts/:id', toValue(args)] as const
}

export function getV1PaymentsPayoutsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPayoutsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments.payouts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPayoutsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPayoutsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPayoutsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPayoutsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments.payouts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentsPayoutsItemPayoutItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
  >,
) {
  return ['v1', '/v1/payments/payouts-item/:payout_item_id', toValue(args)] as const
}

export function getV1PaymentsPayoutsItemPayoutItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentsPayoutsItemPayoutItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payments['payouts-item'][':payout_item_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentsPayoutsItemPayoutItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
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
                  ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentsPayoutsItemPayoutItemIdQueryKey>
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
            ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentsPayoutsItemPayoutItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentsPayoutsItemPayoutItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payments['payouts-item'][':payout_item_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentsPayoutsItemPayoutItemIdCancelMutationKey() {
  return ['v1', '/v1/payments/payouts-item/:payout_item_id/cancel', 'POST'] as const
}

export function getPostV1PaymentsPayoutsItemPayoutItemIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsPayoutsItemPayoutItemIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.payments['payouts-item'][':payout_item_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV1PaymentsPayoutsItemPayoutItemIdCancel<
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
                    (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
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
  const mutationDefaults = getPostV1PaymentsPayoutsItemPayoutItemIdCancelMutationOptions<
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
