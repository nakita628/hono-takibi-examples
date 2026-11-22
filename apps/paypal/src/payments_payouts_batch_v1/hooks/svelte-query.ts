import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostV1PaymentsPayouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.payouts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.payments.payouts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentsPayoutsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentsPayoutsIdQueryKey(
  args: InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>,
) {
  return ['v1', '/v1/payments/payouts/:id', args] as const
}

export function getV1PaymentsPayoutsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentsPayoutsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments.payouts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPayoutsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentsPayoutsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1PaymentsPayoutsItemPayoutItemIdQueryKey(
  args: InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>,
) {
  return ['v1', '/v1/payments/payouts-item/:payout_item_id', args] as const
}

export function getV1PaymentsPayoutsItemPayoutItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentsPayoutsItemPayoutItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payments['payouts-item'][':payout_item_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentsPayoutsItemPayoutItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentsPayoutsItemPayoutItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1PaymentsPayoutsItemPayoutItemIdCancel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentsPayoutsItemPayoutItemIdCancelMutationOptions<
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
