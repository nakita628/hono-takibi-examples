import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1PaymentsPayoutsKey() {
  return ['v1', '/v1/payments/payouts', 'POST'] as const
}

export function usePostV1PaymentsPayouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payments.payouts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.payments.payouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsPayoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payments.payouts.$post> }) =>
        parseResponse(client.v1.payments.payouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentsPayoutsIdKey(
  args: InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>,
) {
  return ['v1', '/v1/payments/payouts/:id', args] as const
}

export function useGetV1PaymentsPayoutsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>
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
        ? getGetV1PaymentsPayoutsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.payouts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPayoutsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>
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
        ? getGetV1PaymentsPayoutsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments.payouts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payments.payouts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentsPayoutsItemPayoutItemIdKey(
  args: InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>,
) {
  return ['v1', '/v1/payments/payouts-item/:payout_item_id', args] as const
}

export function useGetV1PaymentsPayoutsItemPayoutItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
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
        ? getGetV1PaymentsPayoutsItemPayoutItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payments['payouts-item'][':payout_item_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentsPayoutsItemPayoutItemId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
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
        ? getGetV1PaymentsPayoutsItemPayoutItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payments['payouts-item'][':payout_item_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentsPayoutsItemPayoutItemIdCancelKey() {
  return ['v1', '/v1/payments/payouts-item/:payout_item_id/cancel', 'POST'] as const
}

export function usePostV1PaymentsPayoutsItemPayoutItemIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsPayoutsItemPayoutItemIdCancelKey()
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
            (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.payments['payouts-item'][':payout_item_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
